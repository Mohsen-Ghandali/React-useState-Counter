import { useState } from "react";

const App = () => {
  let [counter,setCounter]=useState(0)

    return (
      <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2 ">
  <h1 style={counter>0?{color:"yellow"}:{color:"red" }}>Counter: {counter}</h1>
  <button onClick={()=>setCounter(counter+1)}>+</button>
  <button onClick={()=>setCounter(counter-1)} disabled={counter>0?null:"disabled"}>-</button> {/* disabled={counter<0?null:"disabled"}  */}
  <button onClick={()=>setCounter(0)}>reset</button>
      </div>
    );
  };
  
  export default App;
  

//------------------or-----------------

// const App = () => {
// let [counter,setCounter]=useState(0)
// const incCounter = ()=>{
//   setCounter(counter+1)
// }
// const decCounter=()=>{
//   setCounter(counter-1)
// }
// const reset=()=>{
//   setCounter(0)
// }

//   return (
//     <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2 ">
// <h1 style={counter>0?{color:"yellow"}:{color:"red" }}>Counter: {counter}</h1>
// <button onClick={incCounter}>+</button>
// <button onClick={decCounter} disabled={counter>0?null:"disabled"}>-</button> {/* disabled={counter<0?null:"disabled"}  */}
// <button onClick={reset}>reset</button>
//     </div>
//   );
// };

// export default App;
