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
// const firstClassCitizen = (n) => {
//   console.log(`Fun recived ${n}`);
//   return n * 2;
// };
// const CollectArgs = (fn, e) => {
//   return fn(e);
// };
// console.log(CollectArgs(firstClassCitizen, 4));

// Task 3.1 – Functions as Data(End!)

// Task 3.2 – Build Your Own Higher-Order Function (Hard)
// Create a higher-order function that:
// Accepts a function as an argument
// Controls when and how many times that function runs
// Change the behavior by passing diferent functions.
// Task 3.2 – Build Your Own Higher-Order Function (Hard)(Start!)
// const coperateSalary = [
//   { name: "Salman", Salary: 30000 },
//   { name: "Subhan", Salary: 40000 },
//   { name: "Ali", Salary: 80000 },
//   { name: "Zain", Salary: 120000 },
//   { name: "ez", Salary: 150000 },
// ];
// const afterTax = (f, times) => {
//   return (arg) => {
//     for (let i = 0; i < times; i++) {
//       f(arg);
//     }
//   };
// };
// const Tax = (arr) =>
//   console.log(
//     arr
//       .filter(({ Salary }) => Salary > 30000)
//       .map(({ name, Salary }) => {
//         const afterTax = Salary * 0.9;
//         return `After tax EmploySalary Name: ${name} salary: $${afterTax}`;
//       }),
//   );
// const seeSalary = afterTax(Tax, 1);
// seeSalary(coperateSalary);
// Task 3.2 – Build Your Own Higher-Order Function (Hard)(End!)

// Task 4.1 – Synchronous Callback Flow
// Write a program that:
// Uses callbacks to control execution order
// Logs start and end of each step
// Rearrange callbacks and observe changes.
// Task 4.1 – Synchronous Callback Flow (Start!)
// function Synchronous1(e) {
//   console.log("Stating the logs battls");
//   console.log("Function 1");
//   console.log("Function working1");
//   e();
// }
// function Synchronous2(e) {
//   console.log("Function 2");
//   console.log("Function working 2");
//   e();
// }
// function Synchronous3(e) {
//   console.log("Function 3");
//   console.log("Function working 3");
//   e();
// }
// function Synchronous4(e) {
//   console.log("Function 4");
//   console.log("Function working 4");
//   e();
// }
// function Synchronous5(e) {
//   console.log("Function 5");
//   console.log("Function working 5");
//   if (e) {
//     e();
//   } else {
//     return;
//   }
// }
// Synchronous1(() =>
//   Synchronous2(() =>
//     Synchronous3(() =>
//       Synchronous4(() => Synchronous5(() => console.log(`end`))),
//     ),
//   ),
// );
// Synchronous5(() =>
//   Synchronous4(() =>
//     Synchronous3(() =>
//       Synchronous2(() => Synchronous1(() => console.log(`end`))),
//     ),
//   ),
// );
// Synchronous2(() =>
//   Synchronous3(() =>
//     Synchronous5(() =>
//       Synchronous4(() => Synchronous1(() => console.log(`end`))),
//     ),
//   ),
// );
// Task 4.1 – Synchronous Callback Flow (End!)

// Task 4.2 – Asynchronous Callback Observation
// Create an asynchronous operation using callbacks (e.g., timers).
// Mandatory:
// Log timestamps
// Clearly show execution order vs written order
// Task 4.2 – Asynchronous Callback Observation(Start!)
// function Asynchronous1(e) {
//   console.log("AsyncFunction 1");
//   console.log("AsyncFunction working 1 ");
//   console.log("AsyncFunction 2 be running after 1000ms ");
//   setTimeout(() => {
//     console.log("AsyncFunction 1 Ended ");
//     e();
//   }, 1000);
// }
// function Asynchronous2(e) {
//   console.log("AsyncFunction 2");
//   console.log("AsyncFunction working 2");
//   console.log("AsyncFunction 3 be running after 1200ms ");
//   setTimeout(() => {
//     console.log("AsyncFunction 2 Ended ");
//     e();
//   }, 1200);
// }
// function Asynchronous3(e) {
//   console.log("AsyncFunction 3");
//   console.log("AsyncFunction working 3");
//   console.log("AsyncFunction 3 will be running after 500");
//   setTimeout(() => {
//     console.log("AsyncFunction 3 Ended ");
//     e();
//   }, 500);
// }
// function Asynchronous4(e) {
//   console.log("AsyncFunction 4");
//   console.log("AsyncFunction working 4");
//   console.log("AsyncFunction 4 will be running after 700");
//   setTimeout(() => {
//     console.log("AsyncFunction 4 Ended ");

//     e();
//   }, 500);
// }
// function Asynchronous5(e) {
//   console.log("AsyncFunction 5");
//   console.log("AsyncFunction working 5");
//   console.log("AsyncFunction 5 will be running after 200");
//   if (e) {
//     console.log("AsyncFunction 5 Ended ");

//     setTimeout(() => e(), 900);
//   } else {
//     return;
//   }
// }
// Asynchronous1(() =>
//   Asynchronous2(() =>
//     Asynchronous3(() =>
//       Asynchronous4(() => Asynchronous5(() => console.log(`end`))),
//     ),
//   ),
// );
// console.log(`execution order
//   AsyncFunction 1
// AsyncFunction working 1
// AsyncFunction 2 be running after 1000ms
// AsyncFunction 1 Ended
// AsyncFunction 2
// AsyncFunction working 2
// AsyncFunction 3 be running after 1200ms
// AsyncFunction 2 Ended
// AsyncFunction 3
// AsyncFunction working 3
// AsyncFunction 3 will be running after 500
// AsyncFunction 3 Ended
// AsyncFunction 4
// AsyncFunction working 4
// AsyncFunction 4 will be running after 700
// AsyncFunction 4 Ended
// AsyncFunction 5
// AsyncFunction working 5
// AsyncFunction 5 will be running after 200
// AsyncFunction 5 Ended
// end`);

// Task 4.2 – Asynchronous Callback Observation(End!)

// Final Project (Medium → Hard)
// JavaScript Task Runner App
// Build a small JavaScript task runner application that:
// Stores tasks using  Map  or  Set
// Executes tasks using callbacks
// Uses default parameters for confguration
// Treats tasks as frst-class functions
// Proof of Work Requirements:
// Add a section called  Execution Logs
// Log at least 3 non-obvious behaviors you observed
// Logs must be based on actual execution

// Build a small JavaScript task runner application that:(Start!)
function TaskRUnner(config = { run: false }) {
  const myTasks = new Map();
  const addTask = (name, task = () => `if noting i just show myself`) => {
    myTasks.set(name, task);
    if (config.run) addTask;
  };
  function getTask(name, cb = () => {}) {
    const task = myTasks.get(name);
    console.log(task());
    const Fun = task();
    return cb(Fun);
  }
  return { addTask, getTask };
}
const addMyTask = TaskRUnner({ run: false });
addMyTask.addTask("App-idea", () => `Have to build my full-stack app`);
addMyTask.getTask("App-idea");
console.log(
  `First of all it was a hard Challange and it took me long time to complete this The first Behavior i was using SET but it was not working correctly and I have to use map is also Good and i didn't know i can get function just by providing key and saving function was the best part`,
);
console.log(
  `Second the addTask on config is crazy i get it will call it self again without name and give me maximum CallStack error`,
);
console.log(
  `Third i came to know if Task Name doesn't exists it will show Task is not a function which i will correct it using if condition and i consulted with ai for dryrun and a bit of a guide but i did this and learn from it`,
);
