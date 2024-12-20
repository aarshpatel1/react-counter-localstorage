import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const countValue = JSON.parse(localStorage.getItem('count')) || 0
    setCount(countValue)
  })

  const handleIncrement = () => {
    const currentCount = count + 1
    setCount(currentCount)
    localStorage.setItem('count', JSON.stringify(currentCount))
  }

  const handleDecrement = () => {
    const currentCount = count - 1
    setCount(currentCount)
    localStorage.setItem('count', JSON.stringify(currentCount))
  }

  return (
    <>
      <h1>React Counter with Local Storage</h1>
      <div className="card">
        <button onClick={handleIncrement}>+</button> &nbsp;
        <button> {count} </button> &nbsp;
        <button onClick={handleDecrement}>-</button>
      </div>
      <p className="read-the-docs">
        This is a react project that store counter value in Local Storage
      </p>
    </>
  )
}

export default App
