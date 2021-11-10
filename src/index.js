import { render } from "react-dom";
import { MyComponent } from "./someJsComponent";
import "./someCodeThatNeedsTranspiling";
import "./styles/style.scss";
import "./styles/another.css";

const headline = "Welcome to the boogaloo";
document.querySelector("h1").innerText = headline;

console.log("im in index with typescript!");

render(<MyComponent />, document.getElementById("root"));
