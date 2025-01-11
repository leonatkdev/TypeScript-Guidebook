# TypeScript Cheatsheet (GuideBook)

This repository provides a beginner-friendly cheatsheet for TypeScript, including examples of commonly used features and concepts. It aims to help developers understand TypeScript syntax and improve their coding practices.


[TypeScript Playground Link]("https://www.typescriptlang.org/play/?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3PkrqhKJwRgBeUAAIgAEjBoBhwPAyNFhYoKYJ4O4ApLmAAKWn0xnuVmUDnuACUwRUOGaHjIXkQMucwPYNC+bjMzHYDGYkH4sGg6kSHPgehEXmFdIZTMEwqS2OF4AcqAA5MIAHKQCTCoIqADyXzI70EHq0kCOqEcClc0jwoCc1p0wyw+hQCEQ0OEl0dEhl0REBg42IWTFYHB4QRKQA")


## Table of Contents

1. [Setting up TypeScript project](#setting-up-typescript-project)
2. [TypeScript Table Types and Syntax](#typescript-table-types-and-syntax)
3. [Basic Types](#basic-types)
   - [Primitive Types](#primitive-types)
     - [String](#string)
     - [Number](#number)
     - [Boolean](#boolean)
     - [Undefined](#undefined)
     - [Null](#null)
     - [Symbol](#symbol)
   - [Special Types](#special-types)
     - [any](#any)
     - [object](#object)
     - [unknown](#unknown)
     - [never](#never)
     - [void](#void)
     - [bigint](#bigint)
4. [Complex Types](#complex-types)
   - [Arrays](#arrays)
   - [Tuples](#tuples)
   - [Sets](#sets)
   - [Maps](#maps)
5. [Functions](#functions)
   - [Function Types](#function-types)
   - [Arrow Functions](#arrow-functions)
6. [Interfaces](#interfaces)
7. [Union Types](#union-types)
8. [Optional Arguments](#optional-arguments)
   - [Default Parameters](#default-parameters)
   - [Rest Parameters](#rest-parameters)

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

## TypeScript Table Types and Syntax

| **Type**            | **Syntax**                                                                  |
| ------------------- | --------------------------------------------------------------------------- |
| **String**          | `const aName: string = "Hello";`                                            |
| **Number**          | `const aNumber: number = 42;`                                               |
| **Boolean**         | `const isActive: boolean = true;`                                           |
| **Array**           | `const numbers: number[] = [1, 2, 3];`                                      |
| **Array (Generic)** | `const items: Array<number> = [1, 2, 3];`                                   |
| **Any**             | `let value: any = "text";`                                                  |
| **Object**          | `const person: { name: string; age: number; } = { name: "John", age: 30 };` |
| **Union**           | `let value: string                                                          |
| **Enum**            | `enum Direction { Up, Down, Left, Right }`                                  |
| **Void**            | `function log(message: string): void {}`                                    |
| **Tuple**           | `const tuple: [string, number] = ["Hi", 42];`                               |
| **Interface**       | `interface IUser { name: string; age: number; }`                            |
| **Type Alias**      | `type ID = string                                                           |

<br>

## Basic Types

## Primitive Types

### String

```typescript
const aName: string = "Hello TypeScript";
console.log("name =", aName);
```

A `string` represents textual data.

### Number

```typescript
const aNumber: number = 23;
console.log("aNumber =", aNumber);
```

TypeScript uses `number` for both integers and floating-point values.

### Boolean

```typescript
const completed: boolean = true;
console.log("completed =", completed);
```

A `boolean` is used for `true` or `false` values.

### Undefined

```typescript
let value: undefined;
console.log("value =", value);
```

`undefined` is a primitive type and represents an uninitialized or missing value. It is automatically assigned to variables that have been `declared` but `not yet assigned a value`.

### Null

```typescript
let value: null = null;
console.log("value =", value);
```

`null` is a primitive type that represents the intentional absence of any object value. It is commonly used to indicate that a variable should be assigned a non-existent or empty object reference.

### Symbol

```typescript
let symbol1: symbol = Symbol("description");
console.log("symbol1 =", symbol1);
```

`symbol` is a unique and immutable primitive type, often used to create object properties that are guaranteed to be unique. Symbols can be used as keys for object properties, providing a way to avoid name clashes

## Special Types

### Any

```typescript
let anything: any = 1;
anything = "a string text";
anything = false;

console.log("anything =", anything);
```

`any` allows a variable to hold any type of value. Use sparingly as it bypasses type safety.

## Object

```typescript
function callApi() {
  let data: object = { name: "bob" };
  console.log(data);
}
```

Objects can hold structured data, but their properties are not typed by default.

---

## Unknown

```typescript
let value: unknown;
value = 42;
console.log("value =", value);
```

`unknown` is a type-safe counterpart to `any`. It represents any value but requires type checking before performing operations on it. You cannot perform operations directly on a variable of type `unknown` without first checking its type.

---

## Never

```typescript
function throwError(): never {
  throw new Error("This function always throws an error.");
}
```

`never` represents values that never occur. It is used for functions that throw exceptions or never return, indicating the function's execution will never successfully complete.

---

## Void

```typescript
function log(message: string): void {
  console.log("message =", message);
}
```

`void` is used when a function doesn't return any value. It indicates that the function performs an action but does not produce a result.

---

## BigInt

```typescript
let largeNumber: bigint = 1234567890123456789012345678901234567890n;
console.log("largeNumber =", largeNumber);
```

`bigint` is a primitive type that can represent very large integers, beyond the limit of the `number` type in JavaScript. It is denoted by appending `n` to the integer value.

---

<br>

## Complex Types

### Arrays

```typescript
const arr: number[] = [10, 23, 36];
console.log("arr =", arr);

// Alternative syntax
const arr2: Array<number> = [10, 23, 36];
console.log("arr2 =", arr2);
```

You can define arrays using `type[]` or `Array<type>` syntax.

---

### Tuples

```typescript
const person: [string, number] = ["John", 30];
console.log("person =", person);
```

Tuples are ordered collections of elements, where each element can have a different type. They are defined with square brackets and fixed sizes.

---

### Sets

```typescript
const uniqueNumbers: Set<number> = new Set([1, 2, 3, 4]);
uniqueNumbers.add(5);
uniqueNumbers.add(3); // Won't add 3 again as it's already in the Set
console.log("uniqueNumbers =", uniqueNumbers);
```

A Set is a collection of unique values. It automatically ensures that each value appears only once and is useful for maintaining uniqueness in your data.

---

### Maps

```typescript
const userInfo: Map<string, string> = new Map();
userInfo.set("name", "John");
userInfo.set("age", "30");
console.log("userInfo =", userInfo);
```

Maps store key-value pairs where both the key and the value can be of any type. Unlike objects, Maps allow any type for keys, including objects.

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
