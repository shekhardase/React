
import React from 'react';
import ReactDom from 'react-dom/client';
import Header from './Components/Header'
import TODOIteam from './Components/ToDoItem';
import Button from './Components/Button';
import "./style.css"

function App() {
  return (
    <div className='ToDoContainer'>
      <Header />
      <TODOIteam></TODOIteam>
      <TODOIteam></TODOIteam>
      <TODOIteam></TODOIteam>
      <TODOIteam></TODOIteam>
      <TODOIteam></TODOIteam>
      <Button></Button>
    </div>
  );
}

export default App;
