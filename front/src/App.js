import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const[user,setLoginUser]=useState({})

  return (
    <div>
     <BrowserRouter>
     <Routes>
          <Route exact path="/" element={ user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>}/>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
