
import React from 'react';
import ReactDom from 'react-dom/client';
import Header from './Components/Header'
import TODOItem from './Components/ToDoItem';
import Button from './Components/Button';
import "./style.css"
import Increment from './Components/Increment';

function App() {
  return (
    <div className='ToDoContainer'>
      {/* <Increment /> */}


      <Header text="HuiHui" />
      <TODOItem completed={true} text="Eat" />
      <TODOItem text="Code" />
      <TODOItem text="Study" />
      <TODOItem text="Sleep" />
      <Button />
    </div>
  );
}

export default App;
