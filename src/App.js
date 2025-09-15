import logo from './logo.svg';
import './App.css';
import {useState} from 'react'



export default function App() {
  const [number, setNumber] = useState(0)

  function diminuir() {
  setNumber(number - 5)
  }

  function aumentar() {
  setNumber(number +8)
  }

  
  return <section>
    <h1>contador</h1>
    <p>{number}</p>
    <button onClick={diminuir}>MENOS</button>
    <button onClick={aumentar}>MAIS</button> 
  </section>
}

