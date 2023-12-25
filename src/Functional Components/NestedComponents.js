import React from "react";

const ChildComponent = () =>{
    return(
        <div><h3>ChildComponent</h3></div>
    );
};

const ParentComponent = () => {
    return(
        <div><h2>Parent Component</h2>
        <ChildComponent/>
        </div>
    );
};

const NestedComponents = () => {
    return(
        <div>
            <h1>
                NestedComponent
            </h1>
            <ParentComponent/>
        </div>
    )
}

export default NestedComponents;