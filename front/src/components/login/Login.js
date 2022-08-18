import React, { useState } from 'react'
import './Login.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Login = ({setLoginUser}) => {

  const navigate=useNavigate();

  const[user,setuser]=useState({
    email:"",
    password:""
})

function handleChange(e){
    const{name,value}=e.target;
    setuser({
        ...user,[name]:value
    })
}

function login(){
   axios.post("http://localhost:9002/login",user)
   .then((res)=> {
    alert(res.data.message);
    setLoginUser(res.data.user);
    navigate("/")
   });
}

  return (
    <>
        <center><h1>Welcome!</h1></center>
        <center><h1>Please login to continue</h1></center>

        <div className ="container">
            <input type="email" placeholder='Email'  name='email' value={user.email} onChange={handleChange} ></input><br/><br/>
            <input type="password" placeholder='password' name='password' value={user.password}  onChange={handleChange} ></input><br/><br/>
            <div className='thebuttons'>
                <button onClick={login}>Login</button>
                <button onClick={()=>{navigate("/register")}}>Register</button>
            </div>
        </div>
    </>
  )
}

export default Login