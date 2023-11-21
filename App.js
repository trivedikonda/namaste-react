// const heading = React.createElement("h1",{id:"heading"},"hello React!");
// console.log(heading); //object but not heading
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div",{},React.createElement("div",{},
[React.createElement("h1",{},"hey"),React.createElement("p",{},"how are you?")]))


console.log(parent)

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




{/* <div>
    <div>
        <h1>hey</h1>
        <p>how are you?</p>
    </div>
</div> */}