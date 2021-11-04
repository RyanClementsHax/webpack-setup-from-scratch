import getClasses from "./getClasses";

console.log("hello!");
getClasses();

const obj = { a: "alpha", b: "bravo" };
const newObj = { ...obj, c: "charlie", d: "delta" };
console.log(newObj);
