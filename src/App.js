import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [arr, setArr] = useState([])
  useEffect(() => {
    const fetchPromise = fetch('https://fakestoreapi.com/products')
              
    fetchPromise.then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error`)
      }
      return response.json();
    }).then((data) => {
      setArr(data)
    })
  }, [])
  return (
    <div className="App">
      <h1>Praticando Promises</h1>
      {
        arr.map(el => (
          <div>
            <li>{el.title}</li>
            <b>{el.price}</b>
          </div>
        ))
      }
    </div>
  );
}

export default App;
