// Section 1: Set & Map (Real Usage)
// Task 1.1 – Set Behavior Investigation
// Create a program that:
// Stores values of diferent types in a Set
// Attempts to add duplicate values intentionally
// Logs the size and contents after each operation
// Mandatory:
// Use at least one object and one array as values
// Modify a stored object and observe the result
// Task 1.1 – Set Behavior Investigation (Start!)

// let setValuesCheck = new Set();
// console.log(`SetValuesCheck initial size:`, setValuesCheck.size);
// setValuesCheck.add(1);
// setValuesCheck.add(2);
// console.log(
//   `SetValuesCheck after adding some values size:`,
//   setValuesCheck.size,
// );
// setValuesCheck.add(3);
// setValuesCheck.add(1);
// setValuesCheck.add(2);
// console.log(
//   `SetValuesCheck after adding dublicate  value size:`,
//   setValuesCheck.size,
//   setValuesCheck.values(),
// );
// setValuesCheck.add(true);
// setValuesCheck.add(false);
// setValuesCheck.add(true);
// console.log(
//   `SetValuesCheck after adding dublicate + new  value size:`,
//   setValuesCheck.size,
//   setValuesCheck.values(),
// );
// setValuesCheck.add(["Hello", "me", "Hello"]);
// console.log(
//   `SetValuesCheck after adding Array size:`,
//   setValuesCheck.size,
//   setValuesCheck.values(),
// );
// setValuesCheck.add("Hello");
// setValuesCheck.add("Helo");
// setValuesCheck.add("Hello");
// console.log(
//   `SetValuesCheck after adding string  size:`,
//   setValuesCheck.size,
//   setValuesCheck.values(),
// );
// setValuesCheck.add({ name: "Salman", age: 12 });
// setValuesCheck.add({ name: "Salman", age: 12 });
// console.log(
//   `SetValuesCheck after adding Object's  size:`,
//   setValuesCheck.size,
//   setValuesCheck.values(),
// );
// console.log(
//   `Set collect the collection of values.Values which are occure once's dublicate values are remove when you log.It is mainly use to get uniqe data only`,
// );

// Task 1.1 – Set Behavior Investigation (End!)

// Task 1.2 – Map vs Object Comparison
// Create the same data structure using:
// A plain JavaScript object
// A  Map
// Perform the following:
// Add entries
// Retrieve values
// Use non-string keys
// Log diferences clearly through output.
// Task 1.2 – Map vs Object Comparison (Start!)
// let simpleOBj = { name: "Salman" };
// const MapObject = new Map([["name", "Salman"]]);
// simpleOBj.age = 20;
// MapObject.set("age", 20);
// console.log(`using object`, simpleOBj);
// console.log(`using`, MapObject);
// console.log(`getting values in object:${Object.entries(simpleOBj).join(",")}`);
// console.log(`getting values in MapObject: `, MapObject.entries());
// console.log(`adding Boolean Keys: `, MapObject.set(true, false));
// console.log(
//   `difference between object and map is Map can take any types for keys and object only take's "String keys and if you manage to take a key which is not string still it will think that it's string and you can't access it" but in Map you can set any type as key`,
// );

// Task 1.2 – Map vs Object Comparison (End!)

// Section 2: Default Parameters (Edge Cases)
// Task 2.1 – Default Value Traps
// Write functions that:
// Use default parameters
// Receive  undefined ,  null , and valid values
// Observe how defaults behave in each case.
// Constraint:
// You must log input values and fnal results together
// Section 2: Default Parameters (Edge Cases)(Start!)
// const Funn = (user = true, Class = 15) => {
//   return `initial values that i get ${user} & ${Class}, \n Finall Values: ${user} & ${Class}`;
// };
// console.log(`Adding arguments when Calling function`, Funn("Salman", 16));
// console.log(`Calling function without arguments`, Funn());
// console.log(
//   `Adding arguments null and 16 when Calling function`,
//   Funn(null, 16),
// );
// console.log(
//   `Adding arguments Salman and undefined when Calling function`,
//   Funn("Salman", undefined),
// );
// console.log(
//   `Adding arguments Hachiman and undefined when Calling function`,
//   Funn("Hachiman", undefined),
// );
// console.log(
//   `Adding arguments boolean's false and true when Calling function`,
//   Funn(false, true),
// );

// Section 2: Default Parameters (Edge Cases)(End!)

// Task 2.2 – Defaults with Functions & Objects
// Create a function where:
// One default parameter is a function
// Another default parameter is an object
// Modify values during execution and observe side efects.
// Task 2.2 – Defaults with Functions & Objects(Start!)
// function fn1(
//   mes = "hello",
//   yells = () => `how are you`,
//   user = { name: "guest", logins: 0 },
// ) {
//   console.log(`${mes} ${yells()} ${user.name}`);
//   user.logins += 1;
//   console.log(` your loggings Attempts: ${user.logins}`);
// }
// const Bio = {
//   name: "Hachiman",
//   logins: 0,
// };
// fn1("Hello!", undefined, Bio);
// fn1("Hello!", undefined, Bio);
// fn1("Hello!", undefined, Bio);
// fn1("Hello!", undefined, Bio);
// Task 2.2 – Defaults with Functions & Objects(End!)

// Task 3.1 – Functions as Data
// Demonstrate that functions can be:
// Stored in variables
// Passed as arguments
// Returned from other functions
// Use meaningful execution output instead of explanations.

// Task 3.1 – Functions as Data(Start!)
const firstClassCitizen = (n) => {
  console.log(`Fun recived ${n}`);
  return n * 2;
};
const CollectArgs = (fn, e) => {
  return fn(e);
};
console.log(CollectArgs(firstClassCitizen, 4));

// Task 3.1 – Functions as Data(End!)
