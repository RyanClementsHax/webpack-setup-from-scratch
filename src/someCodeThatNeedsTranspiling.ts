import getClasses from "./lib/getClasses";

const age: number = 4;
console.log(age);

console.log("hello!");
getClasses();

const obj = { a: "alpha", b: "bravo" };
const newObj = { ...obj, c: "charlie", d: "delta" };
console.log(newObj);

console.log("es8 object.values ex", Object.values(newObj));

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
