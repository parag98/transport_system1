import React,{useState,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import TNav from "./TNav/TNav";
import ScriptTag from 'react-script-tag/lib/ScriptTag';
import {UserContext} from '../App';
import './TNav/Thome.css';


const Thome=()=>{
    const{state, dispatch}= useContext(UserContext);
    <ScriptTag src="https://kit.fontawesome.com/a076d05399.js"></ScriptTag>
    const navigate=useNavigate();
    const [vehicleNo,setVehicle]=useState("")
   const [from,setFrom]=useState("")
   const [to,setTo]=useState("")
   
    const PostData=(e)=>{
        // const vehicleBy=localStorage.getItem("userPhone")
        e.preventDefault();
     fetch('/Thome',{
         method :"POST",
         headers:{
          "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt") 
         },
         body:JSON.stringify({
             vehicleNo,
            //  vehicleBy,
             from,
             to
         })
     }).then(res=>res.json())
     .then(data=>{
         console.log(data)
        if(data.error){
           window.alert(data.error);
           setVehicle("")
           setFrom("")
           setTo("")
        }
        else{
            setVehicle("")
         window.alert('Vehicle uploaded for loader');
         navigate('/Thome')
        }
     }).catch(err=>{
         console.log(err)
     })
     }
    
    
    return(
        <>
            <TNav></TNav>
            <div className='scroll-left'>
            <p>Welcome! {localStorage.getItem("userTname")}</p>
           
            </div>
            <img src="https://lh5.googleusercontent.com/TIJeCsTkI3j6tBVOAUhM9n_fDq29vrGzKNAhcqUtlyyeCP9iGiQZq7ekdu0gWkAh68TAmY_lCx-fK1lyqE50SzTuzfzByVOhA_PwUxI6GXJCaW_AK2MnlbzMEwBX_sf9ocagetew" alt='noimg' style={{width:"100%"}}/>
            
    
      <input type="checkbox" id="show"/>
      <label for="show" class="show-btn" >ADD VEHICLE<i class="fa fa-plus"/></label>
      <div class="container1"  >
        <label for="show"  title="close" style={{float:"right"}}><span class="material-icons-outlined">
cancel_presentation
</span>

</label>
        <div class="text" style={{color:"#3D6F71 "}}>
        ADD VEHICLE</div>
<form action="#" >
         <centre> <div class="data" >
            <label style={{color:"black"}}>Vehicle Number:</label>
            <input type="text" style={{textTransform:"uppercase"}}    value={vehicleNo} onChange={(e)=>setVehicle(e.target.value)}   />
            <label style={{color:"black"}}>From:</label>
            <input type="text" style={{textTransform:"uppercase"}}    value={from} onChange={(e)=>setFrom(e.target.value)}   />
            <label style={{color:"black"}}>To:</label>
            <input type="text" style={{textTransform:"uppercase"}}    value={to} onChange={(e)=>setTo(e.target.value)}   />
          </div>
          <div class="btn">
            <div class="inner">
</div>
<button type="submit" onClick={(e)=>PostData(e)}  >Submit</button>
          </div>
</centre>
</form>

</div>
            
        </>
    )
}
export default Thome
