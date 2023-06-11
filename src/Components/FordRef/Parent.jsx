import React, { useRef } from 'react'
import Child from './Child'

const Parent = () => {
    const inputRef = useRef("")
  return (
    <div>
    Parent
    <br />
    <Child ref={inputRef} />

    <button onClick={()=>{inputRef.current.style.backgroundColor="blue"}}>Update Child</button>
    </div>
  )
}

export default Parent