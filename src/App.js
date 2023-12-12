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
import PropsClass from './Day4/PropsClass';
import PropsFunctional from './Day4/PropsFunctional';
import StaetClassCom from './Day4/StateClassCom';
export default function App() {
  return (
    <div>
        <ClassCom></ClassCom>
        <FunctionalCom></FunctionalCom>
        <PropsFunctional name="BHarath"></PropsFunctional> 
        <PropsClass class="It-A"></PropsClass>
        <StaetClassCom></StaetClassCom>
        </div>
  );
};

