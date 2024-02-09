import React from 'react'
import { useState } from 'react';
import "./CustomContactformstyles.css"
import CustomButton from "./CustomButton";

const Login=()=>{
const[username,setUsername]=useState('');
const[password,setPassword]=useState('');
const[errors,setErrors]=useState({username:'', password:''});

const submitForm=(event)=>{
  event.preventDefault()
  let errorCount=0
  if(username==''){
    
    setErrors(()=>{
      return { username:'Username is Required'}
     
    })

  }
  if(password==''){
   
    setErrors(()=>{
      return{password:'Password is Required'}
    })
  }

 
  else{
    setErrors((prevState)=>{
      return{...prevState,password:''}
    })
  }
  if(errorCount==0){
    const formdata={username,password}
    console.log(formdata)
    setUsername("")
    setPassword("")
  }
}
 return(
<form onSubmit={submitForm} className='mainform'>
<input type="text" name="username" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} className='input1'/>
{errors.username && <p className='userErrorstyle'>{errors.username}</p>}
<br />
<br />
<br />

<input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className='input2'/>
{errors.password && <p className='passwordErrorstyle'>{errors.password}</p>}
<br />
<br />
<br />

<CustomButton title={"Submit"} type="submit" style={{ color: "white", marginLeft: "150px"}}/>


</form>
 );
 };
 export default Login;