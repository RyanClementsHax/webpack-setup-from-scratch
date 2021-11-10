import { Counter } from "./Counter";
import { MyOtherComponent } from "./someJsxComponent";

export const MyComponent = () => (
  <h2>
    <MyOtherComponent />
    <Counter />
  </h2>
);
