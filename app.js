import React from "react";
import  ReactDOM  from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "shaha" },
//   "hello world from react app js file"
// );

/*
how can we create nested tag using react like html 

<div id="parent">
<div id="child">
<h1> i am h1 tag </h1>
</div>
</div>
*/
// console.log(heading);

// this is core of react

// this is making vey ugly and react is not making easy so react devloper introducer JSX

const parent1 = React.createElement("div", { id: parent }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "THIS IS H1 ELEMENT"),
    React.createElement("h2", {}, "THIS IS H2 ELEMENT"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "THIS IS H1 ELEMENT"),
    React.createElement("h2", {}, "THIS IS H2 ELEMENT"),
  ]),
]);
// console.log(parent1);
const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(parent1);
