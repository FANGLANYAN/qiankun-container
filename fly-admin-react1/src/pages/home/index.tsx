import React from 'react'
import { useEffect } from 'react'
export default function Hoem(props:any) {
  const clickMe = ()=>{
      console.log(props,'页面props');
  }
  return (
    <div onClick={clickMe}>Home</div>
  )
}
