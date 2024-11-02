import { getPosts } from './appi';
import { useEffect, useState } from "react";
import './App.css';
import Postcard from './components/postcard';

function App() {

  const [data, setdata] = useState(null);

  useEffect(() => {
    getPosts().then(posts => setdata(posts))
  }, []);

  return (
    <div className='App'>
      {
        data ? data.map((e) => <Postcard title={e.title} body={e.body} />) : <> <p>NO DATA</p></>
      }
    </div>
  );
}

export default App;