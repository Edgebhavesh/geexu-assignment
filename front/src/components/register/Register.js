import React, { useState } from 'react'
import './Register.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const navigate = useNavigate()

    const[user,setuser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    function handleChange(e){
        const{name,value}=e.target;
        setuser({
            ...user,[name]:value
        })
    }


    function register(){
        const{name,email,password,reEnterPassword}= user;

        if(name && email && password && (password===reEnterPassword))
        {
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                navigate("/login")
            })
        }
        else
        {
            alert("register unsuccessfully");
        }
    }

  return (
    <>
    <center><h1>Please tell us about you</h1></center>
    <div className ="container">
            <input type="text" placeholder='name' name='name' value={user.name} onChange={handleChange}></input><br/><br/>
            <input type="email" placeholder='Email' name='email' value={user.email}  onChange={handleChange} ></input><br/><br/>
            <input type="password" placeholder='password' name='password' value={user.password}  onChange={handleChange} ></input><br/><br/>
            <input type="password" placeholder='password again' name='reEnterPassword' value={user.reEnterPassword}  onChange={handleChange} ></input><br/><br/>

            <div className='thebuttons'>
                <button onClick={register}>Register</button>
                <button onClick={()=>{navigate("/login")}}>Login</button>
            </div>
     </div>
     </>
  )
}

export default Register