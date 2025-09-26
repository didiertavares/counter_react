import logo from './logo.svg';
import './App.css';
import {useState} from 'react'



export default function App() {
  const [number, setNumber] = useState(0)

  let interval = 

  function diminuir() {
    setNumber(number - 5)
  }

  function aumentar() {
    setNumber(number +8)
  }
  
  return <section>
    <h1>Contador</h1>
    <input placeholder='intervalo'></input>
    <p>{number}</p>
    <div>
      <button onClick={diminuir}>MENOS</button>
      <button onClick={aumentar}>MAIS</button>
    </div>
  </section>
}

