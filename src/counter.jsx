import React, { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    return <div>
        <p>You have clicked the counter {count} times</p>
        <button onClick={increment}>Click Me!!</button>
        <button onClick={reset}>Reset</button>
    </div>;

    function reset(){
        setCount(0);
    }

    function increment(){
        setCount(prevCount => prevCount + 1);
        console.log(count);
    }
}