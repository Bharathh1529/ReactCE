import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className='division1'>
    <div className='DivForm'>
    <form>
    <h2>• Login •</h2>
    <br></br>
    <input type='text' placeholder='Username or Email' required></input>
    <br></br>
    <br></br>
    <input type='password' placeholder='password' required></input>
    <br></br>
    <br></br>
    <button className='subButton'>submit</button>
     <br></br>
     <br></br>
     <a>View Our <a href='https://www.cockroachlabs.com/cloud-terms-and-conditions/'>Terms of Service</a> and <a href='https://www.cockroachlabs.com/cloud-terms-and-conditions/'>Policy</a></a>
     <br></br>
     <br></br>
     <bh>New to OurWebsite <Link to='./SamApp1'>Sign Up</Link></bh>
    </form>      
    </div>
  </div>
  );
};
