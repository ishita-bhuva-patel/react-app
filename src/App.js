import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  function increment(){
    setCount(count + 1);
  }

  return (
   <>
    <h1>{count}</h1>
    <h1>hellloooo github</h1>
    <button onClick={increment}>+</button>
   </>
  );
}

export default App;
