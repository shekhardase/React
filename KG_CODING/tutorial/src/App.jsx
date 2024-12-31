import AppName from "./Components/AppName"
function App() {
  return (
    <>
      <center class="todo-container">
        <AppName />
        <div class="container text-center">
          <div class="row">
            <div class="col-4">
              <input type="text" placeholder="Enter Text Here" />
            </div>
            <div class="col-4">
              <input type="date" />
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-success">Add</button>
            </div>
          </div>


          <div class="row">
            <div class="col-4">
              {/* <input type="text" placeholder="Enter Text Here" /> */}
              Buy Milk
            </div>
            <div class="col-4">
              {/* <input type="date" /> */}
              29/03/2004
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">Delete</button>
            </div>
          </div>


          <div class="row">
            <div class="col-4">
              {/* <input type="text" placeholder="Enter Text Here" /> */}
              fuck Off
            </div>
            <div class="col-4">
              {/* <input type="date" /> */}
              00/00/0000
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">Delete</button>
              {/* <button type="button" class="btn btn-success">Add</button> */}
            </div>
          </div>
        </div>
      </center>
    </>
  )
}

export default App
