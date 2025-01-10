// String
const aName: string = "Hello TypeScript";
console.log("name = ", aName);

// Number
const aNumber: number = 23;
console.log("aNumber = ", aNumber);

// Boolean
const completed: boolean = true;
console.log("completed = ", completed);

// Array
const arr: number[] = [10, 23, 36];
console.log("arr =", arr);
// Array equivalent but less common in real-world apps
const arr2: Array<number> = [10, 23, 36];
console.log("arr2 =", arr2);

// Any
let anything: any = 1;
anything = "a string text";
anything = false;

console.log("anything = ", anything);

// Functions Arguments
function handleFunc(age: number) {
  console.log("age = ", age);
  // age needs to be a number or will throw error
}

// What the Function will return
function handleFuncReturn(age: number): any {
  if (age !== undefined) {
    let message = `you are ${age} years old`;
    return message;
  }

  return false;
  // we know it's a string but we could return anything
}

// the Function should not retun any value
function log(message: string): void {
  console.log("message = ", message);
}

// --- Objects

function callApi() {
  //   let data: object = backend.get("/api/users");
  //  data = 42; // error:
  //   data = { name: "bob" }; // works, we've assigned an object
}

// Interfaces
// --------------------------
interface Iuser {
  firstName: string;
  lastName: string;
}

// doesn't compile because firstName, LastName missing
// let me: Iuser = {};

// Works
let me: Iuser = { firstName: "leo", lastName: "Kras" };

// doesn't compile because IUser has no an 'age' property
// me.age = 21
// --------------------------

// Optional with interface object
interface Iuser2 {
  firstName: string;
  lastName: string;
  age?: number;
}

let me2: Iuser2 = { firstName: "leo", lastName: "Kras" };

me2.age = 21;

//   Different Type
let ambiguous: string | number;
ambiguous = "Not any more";
ambiguous = 21;
