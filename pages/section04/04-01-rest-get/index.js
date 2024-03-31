import axios from "axios"
import { useState } from "react"
import 나만의페이지 from '../../section01/01-01-example'

export default function RestGetPage() {
  const [result, setResult] = useState("")

  function onClickAsync() {
    // 비동기 요청
    setResult(axios.get("https://koreanjson.com/posts/1"))
    console.log(result) //promise
  }

  // async function onClickSync() {
  //   // 동기 요청
  //   setResult(await axios.get("https://koreanjson.com/posts/1"))  => 함수 중복 선언 문제
  //   console.log(result) 
  // }

  const onClickSync = async() => {
    // 동기 요청
    setResult(await axios.get("https://koreanjson.com/posts/1")) 
    console.log(result) 
  }



  return (
    <div>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
      <나만의페이지></나만의페이지>
    </div>
  )
}