import React from "react";
import userContext from "../../public/utils/userContext";
import { useContext } from "react";

function About(){
    return (
        <>
            <h1>About</h1>
            <input type="text" 
            placeholder="dummy user" 
            onChange={(e) => handleUser(e.target.value)}
            />
            <h2>e</h2>
        </>
    )
}
export default About;