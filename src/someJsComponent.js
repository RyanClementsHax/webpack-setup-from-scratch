import { Counter } from "./Counter";
import { MyOtherComponent } from "./someJsxComponent";
import img from "./images/img.jpg";

export const MyComponent = () => (
  <h2>
    <MyOtherComponent />
    <Counter />
    <img src={img} alt="" />
  </h2>
);
