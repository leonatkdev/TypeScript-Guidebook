# TypeScript Cheatsheet (GuideBook)

This repository provides a beginner-friendly cheatsheet for TypeScript, including examples of commonly used features and concepts. It aims to help developers understand TypeScript syntax and improve their coding practices.


<!-- --- -->

## Table of Contents
1. [Setting up a project](#setting-up-typescript-project)
2. [Common TypeScript Types and Syntax Table](#table-typescript-types-and-syntax)
3. [Basic Types](#basic-types)
4. [Functions](#functions)
5. [Objects](#objects)
6. [Interfaces](#interfaces)
7. [Union Types](#union-types)
8. [Optional Arguments](#optional-arguments)

<br>

<!-- --- -->
## Setting up TypeScript Project
Follow these steps to set up and start using TypeScript:

## **1. Install TypeScript**

### Install Locally
Install TypeScript locally in your project:
```bash
npm install typescript --save-dev
```

### Install Globally
If you want to install it globally:
```bash
npm install -g typescript
```

---

## **2. Initialize TypeScript Configuration**

Run the following command to create a `tsconfig.json` file for configuring TypeScript:
```bash
npx tsc --init
```

---

## **3. Create Your First TypeScript File**

Create a new `.ts` file, for example:
```typescript
// index.ts
const message: string = "Hello TypeScript!";
console.log(message);
```

---

## **4. Compile TypeScript to JavaScript**

To compile your `.ts` file to JavaScript, run:
```bash
npx tsc
```
This generates a `.js` file in the same directory as your `.ts` file.

---

## **5. Run the JavaScript File**

Use Node.js or any JavaScript runtime to execute the compiled `.js` file:
```bash
node index.js
```

---

## **6. Set Up a Watcher for Development**

To automatically recompile TypeScript files as you edit them:
```bash
npx tsc --watch
```

---

<br>

## Table TypeScript Types and Syntax

| **Type**          | **Syntax**                                 |
|--------------------|-------------------------------------------|
| **String**         | `const aName: string = "Hello";`          |
| **Number**         | `const aNumber: number = 42;`             |
| **Boolean**        | `const isActive: boolean = true;`         |
| **Array**          | `const numbers: number[] = [1, 2, 3];`    |
| **Array (Generic)**| `const items: Array<number> = [1, 2, 3];` |
| **Any**            | `let value: any = "text";`                |
| **Object**         | `const person: { name: string; age: number; } = { name: "John", age: 30 };` |
| **Union**          | `let value: string | number = "Hello";`   |
| **Enum**           | `enum Direction { Up, Down, Left, Right }`|
| **Void**           | `function log(message: string): void {}`  |
| **Tuple**          | `const tuple: [string, number] = ["Hi", 42];` |
| **Interface**      | `interface IUser { name: string; age: number; }` |
| **Type Alias**     | `type ID = string | number;`              |


<br>

## Basic Types

### Strings
```typescript
const aName: string = "Hello TypeScript";
console.log("name =", aName);
```
A `string` represents textual data.

### Numbers
```typescript
const aNumber: number = 23;
console.log("aNumber =", aNumber);
```
TypeScript uses `number` for both integers and floating-point values.

### Booleans
```typescript
const completed: boolean = true;
console.log("completed =", completed);
```
A `boolean` is used for `true` or `false` values.

### Arrays
```typescript
const arr: number[] = [10, 23, 36];
console.log("arr =", arr);

// Alternative syntax
const arr2: Array<number> = [10, 23, 36];
console.log("arr2 =", arr2);
```
You can define arrays using `type[]` or `Array<type>` syntax.

### Any
```typescript
let anything: any = 1;
anything = "a string text";
anything = false;

console.log("anything =", anything);
```
`any` allows a variable to hold any type of value. Use sparingly as it bypasses type safety.

---

<br>

## Functions

### Function Arguments
```typescript
function handleFunc(age: number) {
  console.log("age =", age);
  // The `age` parameter must be a number.
}
```

### Default Values for Parameters
```typescript
function handleFuncDefault(age: number = 1): number {
  return age;
}
```
Provide default values to parameters to make them optional.

### Return Types
```typescript
function handleFuncReturn(age: number): any {
  if (age !== undefined) {
    let message = `You are ${age} years old`;
    return message;
  }
  return false;
}
```
TypeScript allows you to define what type a function should return.

### Void Return Type
```typescript
function log(message: string): void {
  console.log("message =", message);
}
```
`void` indicates a function does not return a value.

---

<br>

## Objects
```typescript
function callApi() {
  let data: object = { name: "bob" };
  console.log(data);
}
```
Objects can hold structured data, but their properties are not typed by default.

---

<br>

## Interfaces
Interfaces define the structure of objects.

### Basic Interfaces
```typescript
interface IUser {
  firstName: string;
  lastName: string;
}

let me: IUser = { firstName: "Leo", lastName: "Kras" };
```

### Optional Properties
```typescript
interface IUser2 {
  firstName: string;
  lastName: string;
  age?: number;
}

let me2: IUser2 = { firstName: "Leo", lastName: "Kras" };
me2.age = 21;
```
Optional properties are denoted by `?`.

---

<br>

## Union Types
```typescript
let ambiguous: string | number;
ambiguous = "Not any more";
ambiguous = 21;
```
Union types allow a variable to hold one of several types.

---

<br>

## Optional Arguments
```typescript
let add = function (x: number, y: number, z: number = 0): number {
  return x + y + z;
};
add(1, 2); // 3
add(10, 10, 10); // 30

let greet = function (firstName: string, lastName?: string): string {
  if (lastName) return `${firstName} ${lastName}`;
  return firstName;
};
greet("John"); // "John"
greet("John", "Doe"); // "John Doe"
```
Optional parameters are indicated by `?` or by providing a default value.

---

Feel free to extend this cheatsheet with more examples and advanced TypeScript features!