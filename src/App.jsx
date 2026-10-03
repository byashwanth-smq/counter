import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const onbutton = () => {
    try{
      fetch("https://api.com", {
        method: "GET",
      })
      .then(r => console.log(r.json()))
      .then(console.log)
      .catch(console.error);
    } catch(err){
      console.log('--err--', err)
    }
  }

  return (
    <>
      <div>
        <h1>Counter</h1>
        <div className="card">
          <button onClick={onbutton}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
