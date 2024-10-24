// // var h1 = document.createElement("h1")
// // h1.innerHTML = "Hello From JS"
// // var root = document.querySelector("#root")

// // root.appendChild(h1)

// console.log(React);

// console.log(ReactDOM);


var h1 = React.createElement('h1', null, 'Hello From React')


var root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(h1)