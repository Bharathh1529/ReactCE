import React from 'react'
import './Asset/SamApp1.css'
export default function SamApp1() {
  return (
    <div className='divForm'>
    <form>
        <h2>•  Registration Form  •</h2>
        <br></br>
        <input type='text' placeholder='Username'></input>
        <br></br>
        <br></br>
        <input type='password' placeholder='Password'></input>
        <br></br>
        <br></br>
        <input type='text' placeholder='Email'></input>
        <br></br>
        <br></br>
        <input type='text' placeholder='Phone'></input>zqa
        <br></br>
        <br></br>
        <input class='submit' type='submit' value='Create Account'></input>
        <br></br>
        <br></br>
      </form>      
    </div>
  );
};
