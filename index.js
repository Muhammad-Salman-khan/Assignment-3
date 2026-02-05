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
let setValuesCheck = new Set([]);
console.log(`SetValuesCheck initial size:`, setValuesCheck.size);
setValuesCheck.add(1);
setValuesCheck.add(2);
console.log(
  `SetValuesCheck after adding some values size:`,
  setValuesCheck.size,
);
setValuesCheck.add(3);
setValuesCheck.add(1);
setValuesCheck.add(2);
console.log(
  `SetValuesCheck after adding dublicate  value size:`,
  setValuesCheck.size,
  setValuesCheck.values(),
);
setValuesCheck.add(true);
setValuesCheck.add(false);
setValuesCheck.add(true);
console.log(
  `SetValuesCheck after adding dublicate + new  value size:`,
  setValuesCheck.size,
  setValuesCheck.values(),
);
setValuesCheck.add(["Hello", "me", "Hello"]);
console.log(
  `SetValuesCheck after adding Array size:`,
  setValuesCheck.size,
  setValuesCheck.values(),
);
setValuesCheck.add("Hello");
setValuesCheck.add("Helo");
setValuesCheck.add("Hello");
console.log(
  `SetValuesCheck after adding string  size:`,
  setValuesCheck.size,
  setValuesCheck.values(),
);
setValuesCheck.add({ name: "Salman", age: 12 });
setValuesCheck.add({ name: "Salman", age: 12 });
console.log(
  `SetValuesCheck after adding Object's  size:`,
  setValuesCheck.size,
  setValuesCheck.values(),
);

// Task 1.1 – Set Behavior Investigation (End!)
