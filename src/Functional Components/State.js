import React, { useState } from "react";

function State() {
    const [data, setData] = useState("Hassan");
    function Clicked() {
        setData("Adil");
        alert(data);
    }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={Clicked}>Click me</button>
        </div>
    );
};

export default State;