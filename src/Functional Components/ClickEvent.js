import React from "react";
function ClickEvent(){
    let data = "Hassaan Adil";
    function Clicked(){
        data = "Anil Sir";
        alert(data);
    }
    return(
        <div>
            <h1>{data}</h1>
            {/* <button onClick={()=>Clicked()}>Click me</button> */}
            <button onClick={Clicked}>Click me</button>
        </div>
    );
};
export default ClickEvent;