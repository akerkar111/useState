// import logo from './logo.svg';
import react, { useState } from 'react';
import './App.css';

function App() {

  const state = useState();

  const [count, setCount ] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  const DecNum = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    else{
      setCount(count);
    }
    
  }

  return (
    <>
   
    <p>{ count }</p>

    <div className="buttons">
    <button className="Incnum" onClick = {IncNum}>
          Add
    </button>
  
    <button className="Decnum" onClick = {DecNum}>
          Minus
    </button>
    </div>
   
    </>
  );
}

export default App;
