// // // import React from 'react'

// // // // var hehe = 1;

// // // export const App = () => {

// // //   const abc = () => {
// // //     console.log("Hello");
// // //   }

// // //   const user = "ABC"

// // //   return (
// // //     <div>
// // //       <h1>UserName is {user}</h1>
// // //       <button onClick={abc}>Click Here</button>
// // //     </div>
// // //   )
// // // }


// // // export default App


// // import React from 'react'

// // export const App = () => {

// //   let user = "Abc"
// //   const changeUser = ()=>{
// //     console.log(user);

// //     user = "HUIHUI"
// //     // react user ko change kardo /// learn usestate hooks



// //     console.log(user);
// //   }

// //   return (

// //     <div>
// //       <h1>UserName is {user} </h1>
// //       <button onClick={changeUser}>Click</button>
// //     </div>
// //   )
// // }

// // export default App


// // hooks - Special types of functions 

// // a = 0 
// // a = 1



// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   return (
//     <div>
//       <h2>Number is {num}</h2>
//       <button onClick={function () {
//         setNum(num + 10)
//       }}>Increment</button>
//       <button
//         onClick={function () {
//           setNum(num - 10)
//         }}>Decrement</button>
//     </div>
//   )
// }

// export default App



import React from 'react'

export const App = () => {
  const changeBackgroundColor = () => {
    // console.log();

    document.body.style.backgroundColor = 'black';
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
      <h2 className="text-5xl bg-pink-300 text-black p-4 rounded-lg shadow-lg">JELLOOO</h2>
      <h1 className="text-3xl font-bold text-pink-500 mt-4">HELLO</h1>
      <h2 className="text-2xl text-white mt-2">JELLOOOOOO</h2>

      <button
        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={changeBackgroundColor}
      >
        Click Me
      </button>
    </div>
  )
}

export default App


