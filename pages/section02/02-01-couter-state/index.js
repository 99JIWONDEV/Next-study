import { useState } from "react"

export default function CounterStatePage() {
  const [counter, setCounter] = useState(0)
  function counterUp() {
    setCounter(counter + 1)
  }
  function counterDown() {
    setCounter(counter - 1)
  }

  return (
    <>
    <div>{counter}</div>
    <button onClick={counterUp}>카운트 올리기</button>
    <button onClick={counterDown}>카운트 내리기</button>
    </>
    
  )
}