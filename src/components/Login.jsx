import React, { useState } from 'react';
import Input from './Input';
function Login(props){
  const[un, finalUN] = useState("");
  const[pw, finalPW] = useState("");
  function updateUN(e){
    finalUN(e.target.value);
  }
  function updatePW(e){
    finalPW(e.target.value);
  }
  return <form className="form">
  <h1>Hello {un}</h1>
  <Input value={un} onChange={updateUN} type="text" placeholder="First Name" />
  <Input value={pw} onChange={updatePW} type="password" placeholder="password" />
  <button type="submit">Login</button>
  </form>

}
export default Login;
