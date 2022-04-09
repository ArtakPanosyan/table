
import React from "react";
import ReactDOM from "react-dom";
import JavaScriptFramework from "./App0";
import App from "./App"


// const number = 10;
// const text = `Hello react !!!`
// const myElementClassName = `my-text`
// const element = <div className={myElementClassName} style={}> {text} </div>
//const element = React.createElement("div", {className: "my-text"}, "Hello React!!!" )



const element = (
    <>
        <JavaScriptFramework frameworkName="React" sim="!" />
        <JavaScriptFramework frameworkName="Angular" sim="!" />
        <JavaScriptFramework frameworkName="Vue" sim="!" />
    </>
)



ReactDOM.render(element, document.getElementById("root"));
