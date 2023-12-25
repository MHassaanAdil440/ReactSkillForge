import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0);
    function Clicked(){
        setCount(count+1);
    }
    console.warn("___________________");
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={Clicked}>Click me</button>
        </div>
    )
}

export default Counter;