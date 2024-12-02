"use client"

import { useState } from "react";
import "./style.css"


const Home =() => {
//     const [count, setCount ] = useState(0);
//     let number = count[0];
//     const [age, setAge] = useState(10);

    

//   return (
//    <div className="button">

//     <button onClick={() => {
//       setCount(count+1);
//     }}>next + </button>


//       <button onClick={() => {
//       setCount(count-1);
//     }}>next - </button>


//     <p>{count}</p>
//     </div>
//   );
// }




  return (
    <div className="column-container">
      <div className="card1">
        <h3 >To Do</h3>
      </div>
      <div className="card2">
        <h3>In Progress</h3>
      </div>
      <div className="card3">
        <h3>Done</h3>
      </div>
      <div className="card4">
        <h3>Blocked</h3>
      </div>
      <div>
      <button className="AddButton" onClick={() => 
          alert("click")
        }> ADD</button>
     
      </div>
    </div>
  );
};
export default Home;