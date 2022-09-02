
import React, { useState } from "react";

export default function Toggle(props) {
  const [state, setState] = useState(false);
  let [added, setAdded] = useState(null)
  const [num, setNum] = useState(0)
  const a = 5;
  const b = 10;

  const add = () => {
const sum  = a + b;
if(added < 5) {
    setAdded(sum) 
}else{
    setAdded(null) 
}

console.log(sum);
  }
  return (
    <>
    <button style={{color: "white", backgroundColor: "#282c34", border: "2px solid white", borderRadius: "20px", padding:"5px", margin: "20px"}}
      onClick={() => {
        add();
        setState(previousState => !previousState);
        props.onChange(!state); 
      }}
      data-testid="toggle"
    >
      {state === true ? "Turn off" : "Turn on"}
    </button>
{added > 5 ?( <p style={{color:"white", fontSize: "20px"}} test-id="add-test">{added}</p>) : (<p>Nada</p>)}

<button testid="add" style={{color: "white", backgroundColor: "#282c34", border: "2px solid white", borderRadius: "20px", padding:"5px", margin: "20px"}} onClick={() => setNum(num +1)}>{num}</button>
</>

  );
}