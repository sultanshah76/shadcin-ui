"use client"

import { useState } from "react"

export default function Updatestate() {
    // let value=0
    const [value, setvalue] = useState(0)
    function increment (){
     setvalue(value+1)
    }
    function decrement (){
     setvalue(value-1)
    }
    return (<>
          <button  className="bg-green-500 rounded-md" onClick={increment}>INCREMENT</button>
          {value}
          <button  className="bg-green-500 rounded-md" onClick={decrement}>DECREMENT</button>
          </>)

}

