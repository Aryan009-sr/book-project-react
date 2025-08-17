import React from "react";
import { useState, useEffect, useRef } from "react";

function Demo(){

    let x = 0;
    const [y , setY] = useState(0);
    const z = useRef(0);
    function handleUpdataCount(){
        x = x + 1;
        console.log(x);
    }
    function handleZ(){
        z.current = z.current + 1;
        console.log(z.current);
    }


    return (
        <div>
            <h1>{x}</h1>
            <button onClick={handleUpdataCount}>inccrease x </button>
            <br />
            <h1>{y}</h1>
            <button onClick={() =>setY(y + 1)}>inccrease Y </button>
            <br />
            <h1>{z.current}</h1>
            <button onClick={handleZ}>inccrease z </button>
            <br />

        </div>
    )
}

export default Demo;