import React from 'react'
import './SamApp1.css'
import { Link } from 'react-router-dom';
export default function SamApp1() {
  return (
    <div className='division'>
    <div className='SecondDiv'>
    <form>
    <h2>• Sign Up •</h2>
    <br></br>
    <input type='text' placeholder='Username'></input>
    <br></br>
    <br></br>
    <input type='text' placeholder='Email'></input>
        <br></br>
        <br></br>
        <input type='password' placeholder='Password'></input>
        <br></br>
        <br></br>
        <input type='password' placeholder='Confirm Password'></input>
        <br></br>
        <br></br>
        <input class='submit' type='submit' value='Create Account'></input>
        <br></br>
        <br></br>
        Already have an Account  
        <Link to='./Login'>  Log in</Link>
        </form>      
    </div>
  </div>
  );
};
