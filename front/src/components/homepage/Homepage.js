import React from 'react'

const homepage = (setLoginUser) => {
  return (
    <>
      <center><h1>HomePage</h1></center>
      <center><button onClick={()=>{setLoginUser({})}}>Logout</button></center>
    </>
  )
}

export default homepage