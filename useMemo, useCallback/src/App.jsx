import { useState, useRef, useMemo, useCallback } from 'react'
import './App.css'

function calculateBigNumber(number) {
  
}

function App() {
  const [arr, setArr] = useState([])

  // const result = useRef(null)
  // result.current = calculateBigNumber(1000000000)
  // console.log(result.current)

  let result = useCallback(() => {
    let num = 0;
    for (let index = 0; index < 10000000; index++) {
      num += index;
    }
    return num;
  }, [])
  
  console.log(result())

  return (
    <>
      <p>{result()}</p>
      <button onClick={() => setArr([...arr, { todo: 'dfdf' }])}>ADD</button>
      {arr.map((item, index) => {
        return <p key={index}>{item.todo}</p>
      })}

    </>
  )
}

export default App
