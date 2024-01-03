import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './button.css'

function App() {
  let [counter, setCounter] = useState(15)

  let invalue = () => {

    if(counter < 20){
    setCounter(
      counter = counter + 1
    )
    }

    else{
      alert("Value can't go above 20")
    }
     
    
  }


  let devalue = () => {

    if(counter >  0){
    setCounter(
      counter = counter - 1
    )
    }

    else{
      alert("Value can't be negative")
    }
     
    
  }


  return (
    <>
     <div>
      <h1>Minor Counter Project for Multiple State Changes</h1>
      <h2>Heading: {counter}</h2>
      <button onClick={invalue}>Increase: {counter}</button>
      <br /><br />
      <button onClick={devalue}>Decrease: {counter}</button>
      <h3>Footer: {counter}</h3>


     </div>
    </>
  )
}

export default App
