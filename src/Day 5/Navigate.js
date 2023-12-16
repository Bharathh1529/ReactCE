import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Navigate() {
    const navigate=useNavigate();
    const loginButton=()=>{navigate("/Log")}
    const SignUpButton=()=>{navigate("/Sign")}
  return (
    <div>
        <button onClick={loginButton}>Login</button>
        <button onClick={SignUpButton}>SignUp</button>
    </div>
  )
}
