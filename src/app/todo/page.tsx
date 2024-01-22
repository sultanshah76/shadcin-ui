"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState,useEffect } from 'react'
export default function Todoapp() {
const [todo, setTodo] = useState("");
const [todos, setTodos] = useState<string[]>([]);
const [update, setUpdate] = useState("");
useEffect(() => { () => {}}, [update]);
const addtodo =()=> {
    setTodos([...todos,todo])
    setTodo("");
}
const deleteTodo = (index: number) => {
    const updateTodo = [...todos];
    updateTodo.splice(index, 1);
    setTodos(updateTodo);
  };
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
        <div className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>KEEP RECORDS OF YOUR DAILY TASKS</div>
        <br />
        <br />
    <div className="flex w-full max-w-sm items-center space-x-2">
    <Input value={todo}  onChange={(e)=>{setTodo(e.target.value)}} type="text" placeholder="TASKS" />
      <Button onClick={addtodo}>Add to list</Button>
    </div>
    <br />
    <div className='mt-4'>{todos.map((item,index)=>(
        <div  className="flex gap-5 py-2 justify-center items-center mt-2" key={index}>
            <p>{item}</p>
            <Button onClick={()=>deleteTodo(index)} variant={'destructive'}> delete task</Button>
            
            </div>
    ))}</div>
    </main>
  );
}
// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import React, { useState, useEffect } from "react";

// function TodoApp() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState<string[]>([]);
//   const [update, setUpdate] = useState(1);

//   console.log("🚀 ~ file: page.tsx:9 ~ TodoApp ~ update:", update);

//   useEffect(() => {
//     // setTodo("Use Effect");
//     console.log("Use Effect");
//     console.log(update);
//   }, [update]);

//   const addTodo = () => {
//     // console.log("Add Todo");
//     // setUpdate(100);
//     setTodos([...todos, todo]);
//     setTodo("");
//   };

//   const deleteTodo = (index: number) => {
//     const updateTodo = [...todos];
//     updateTodo.splice(index, 1);
//     setTodos(updateTodo);
//   };

//   return (
//     <div className="flex min-h-screen flex-col items-center p-24">
//       <div className="flex w-full max-w-sm items-center space-x-2">
//         <Input
//           value={todo}
//           onChange={(e) => {
//             setTodo(e.target.value);
//           }}
//           placeholder="Title"
//         />
//         <Button onClick={addTodo}>Add</Button>
//       </div>
//       <div className="mt-10">
//         {todos.map((item, index) => (
//           <div
//             key={index}
//             className="flex gap-5 py-2 justify-center items-center"
//           >
//             <p>{item}</p>
//             <Button variant={"destructive"} onClick={() => deleteTodo(index)}>
//               Delete
//             </Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TodoApp;
