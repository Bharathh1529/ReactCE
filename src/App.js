// import logo from './image.jpg';
// import './App.css';
// function App() {
  //   return (
    //     <div className='App'>
    //       <h2>Bharath</h2>
    //       <img src={logo} alt="logo" />
    //     </div>
    
    //   );
    // }
    // export default App;
//import logo from './image.jpg';
import React from 'react'
import './App.css';
import ClassCom from './Component/ClassCom';
import FunctionalCom from './Component/FunctionalCom';
export default function App() {
  return (
    // <div className='divForm'>
    // <form>
    //     <h2>•  Registration Form  •</h2>
    //     <br></br>
    //     <input type='text' placeholder='Username'></input>
    //     <br></br>
    //     <br></br>
    //     <input type='password' placeholder='Password'></input>
    //     <br></br>
    //     <br></br>
    //     <input type='text' placeholder='Email'></input>
    //     <br></br>
    //     <br></br>
    //     <input type='text' placeholder='Phone'></input>
    //     <br></br>
    //     <br></br>
    //     <input class='submit' type='submit' value='Create Account'></input>
    //     <br></br>
    //     <br></br>
    //   </form>      
    // </div>
    <div>
        <ClassCom></ClassCom>
        <FunctionalCom></FunctionalCom>
      </div>
  );
};

