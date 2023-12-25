"use client";
import React,{useState} from 'react';
type updatestateuitype={
       propcount:number,
       count1?:number,
       count2?:number
}
export default function Updatestate({propcount}:updatestateuitype) {
       // const={propcount,count1,count2} props
    const [Value,setValue]=useState<number>(propcount);
    function increment (){
     setValue(Value+1)
    }
    function decrement (){
     setValue(Value-1)
    }
    return (<>
          <button  className="bg-green-500" onClick={increment}>INCREMENT</button>
          {Value}
          <button  className="bg-green-500" onClick={decrement}>DECREMENT</button>
          </>)

}

