import React from "react";

 export default  function conditionalrendring(){
    let content;
    let state = false;
    if (state) {
        content=<div>admin panel</div>;
    } else {
        content=<div>login page</div>;
    }
    return <div>
    {content}
    {state?<div>condition true</div>:<div>condition false</div>}
    {state&&<div>And condition true</div>}
    </div>
    }
{/* 
//  export default function ConditionalRendering  () {
//     let isLoggedIn = true;
  
//     return (
//       <div>
//         {isLoggedIn ? <div>Admin Panel</div> : <div>Login Form</div>}
//       </div>
//     );
//   };
   */}