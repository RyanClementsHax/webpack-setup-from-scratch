import getClasses from "./getClasses";

console.log("hello!");
getClasses();

const obj = { a: "alpha", b: "bravo" };
const newObj = { ...obj, c: "charlie" };
console.log(newObj);
