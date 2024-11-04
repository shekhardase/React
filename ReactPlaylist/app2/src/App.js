import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import GetRandomUser from './api';
import UserCard from './Component/usercard';

function App() {

  const [userData, setuserData] = useState(null);


  // useEffect(() => {
  //   GetRandomUser().then(user => setuserData(user.results[0])
  //   )
  // }, [])

  useEffect(() => {
    userRefresh();  // Trigger initial data load
  }, []);


  const userRefresh = () => {
    GetRandomUser().then(user => setuserData(user.results[0]))
  }

  return (
    <div className="App">

      {userData && <UserCard data={userData} />}
      <button onClick={userRefresh}>Click</button>

      {/* <button onClick={() => window.location.reload()}>Click</button>       // or i can use another function */}
    </div>
  );
}

export default App;
