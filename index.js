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
let simpleOBj = { name: "Salman" };
const MapObject = new Map([["name", "Salman"]]);
simpleOBj.age = 20;
MapObject.set("age", 20);
console.log(`using object`, simpleOBj);
console.log(`using`, MapObject);
console.log(`getting values in object:${Object.entries(simpleOBj).join(",")}`);
console.log(`getting values in MapObject: `, MapObject.entries());
console.log(`adding Boolean Keys: `, MapObject.set(true, false));
console.log(
  `difference between object and map is Map can take any types for keys and object only take's "String keys and if you manage to take a key which is not string still it will think that it's string and you can't access it" but in Map you can set any type as key`,
);

// Task 1.2 – Map vs Object Comparison (End!)
