// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import MyComponent from './mycomp';
import Timer from './Timer';


function App() {

  // const [visible, SetVisible] = useState(true);

  // useEffect(() => {
  //   console.log("App is Mounting....");
  // }, [])

  // useEffect(() => {
  //   console.log("Toogle Visiability");

  // })

  return (
  //   <div>

  //     {visible ? <MyComponent /> : <></>}

  //     <button onClick={() => {
  //       SetVisible(!visible);
  //     }}>
  //       CLICK
  //     </button>

  //   </div>

  <div>
    <Timer/>
  </div>

  )
}

export default App;
