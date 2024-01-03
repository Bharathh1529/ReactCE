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
// import React from 'react'
// import ClassCom from './Bharathhhh/ClassCom'
// export default function App() {
//   return (
//     <div>        
//         <ClassCom favcol="LightBlue"/>
//     </div>
//   )
// }

// import React from 'react';
// import { Provider } from 'react-redux';
// //import CounterComponent from './Thunk/CounterComponent';
// import CounterComponent from './Thunk/CounterComponent';
// import store from '/Thunk/store';
// const App=()=>{
//   return (
//   <Provider store={store}>
//   <CounterComponent/>
//   </Provider>
//   );
// };
// export default App;
import React from 'react';
import { Provider } from 'react-redux';
import CounterComponent from './Thunk/CounterComponent';
import store from './Thunk/Store';
const App=()=>{
  return (
  <Provider store={store}>
  <CounterComponent/>
   </Provider>
  );
};
export default App;
