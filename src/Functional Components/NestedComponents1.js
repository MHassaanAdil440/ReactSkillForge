import React from "react";
function NestedComponents1(){
    function ChildComponent(){
        return(
            <div>
                <h2>ChildComponent</h2>
            </div>
        )
    }
    return(<div>
        <h1>ParentComponent</h1>
        <ChildComponent/>
    </div>)
}
export default NestedComponents1;