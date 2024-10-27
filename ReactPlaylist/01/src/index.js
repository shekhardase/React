import React from 'react';
import ReactDOM from 'react-dom/client';
// import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function Ello() {
//   return <h1>Hello World</h1>
// }

// function Compo(params) {
//   const name = "shekhar";
//   const x = 2 + 3;
//   return <h1>Hello {name}</h1>
// }

// const user = {
//   FirstName: "Shekhar",
//   LastName: "Dase"
// }
// function Add({ user }) {
//   return <h1>{user.FirstName + ' ' + user.LastName}</h1>
// // }

// function Add(a, b) {
//   return a + b
// }

// function Comp() {
//   return <h2>Hello {Add(20, 20)}</h2>
// }

// function Card() {
//   return (
//     <div>
//       <div className="card">This is Card Demo</div>
//       <h2>Card Title</h2>
//       <p>This is a card component.</p>
//     </div>

//   )
// }
// zz


const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Add />)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)