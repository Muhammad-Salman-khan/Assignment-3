**Task 1.1 – Set Behavior Investigation**

<h2>Logs</h2>
`SetValuesCheck initial size: 0
SetValuesCheck after adding some values size: 2
SetValuesCheck after adding dublicate  value size: 3 [Set Iterator] { 1, 2, 3 }
SetValuesCheck after adding dublicate + new  value size: 5 [Set Iterator] { 1, 2, 3, true, false }
SetValuesCheck after adding Array size: 6 [Set Iterator] { 1, 2, 3, true, false, [ 'Hello', 'me', 'Hello' ] }
SetValuesCheck after adding string  size: 8 [Set Iterator] {
  1,
  2,
  3,
  true,
  false,
  [ 'Hello', 'me', 'Hello' ],
  'Hello',
  'Helo'
}
SetValuesCheck after adding Object's  size: 10 [Set Iterator] {
  1,
  2,
  3,
  true,
  false,
  [ 'Hello', 'me', 'Hello' ],
  'Hello',
  'Helo',
  { name: 'Salman', age: 12 },
  { name: 'Salman', age: 12 }
}
Set collect the collection of values.Values which are occure once's dublicate values are remove when you log.It is mainly use to get uniqe data only`

**Task 1.2 – Map vs Object Comparison**:

<h2>Logs</h2>
using object { name: 'Salman', age: 20 }
using Map(2) { 'name' => 'Salman', 'age' => 20 }
getting values in object:name,Salman,age,20
getting values in MapObject:  [Map Entries] { [ 'name', 'Salman' ], [ 'age', 20 ] }
adding Boolean Keys:  Map(3) { 'name' => 'Salman', 'age' => 20, true => false }
difference between object and map is Map can take any types for keys and object only take's "String keys and if you manage to take a key which is not string still it will think that it's string and you can't access it" but in Map you can set any type as key

**Task 2.1 – Default Value Traps**

<h2>Logs</h2>
Adding arguments when Calling function initial values that i get Salman & 16, 
 Finall Values: Salman & 16
Calling function without arguments initial values that i get true & 15, 
 Finall Values: true & 15
Adding arguments null and 16 when Calling function initial values that i get null & 16, 
 Finall Values: null & 16
Adding arguments Salman and undefined when Calling function initial values that i get Salman & 15, 
 Finall Values: Salman & 15
Adding arguments Hachiman and undefined when Calling function initial values that i get Hachiman & 15, 
 Finall Values: Hachiman & 15
Adding arguments boolean's false and true when Calling function initial values that i get false & true, 
 Finall Values: false & true

**Task 2.2 – Defaults with Functions & Objects**

<h2>Logs</h2>
Hello! how are you Hachiman
 your loggings Attempts: 1
Hello! how are you Hachiman
 your loggings Attempts: 2
Hello! how are you Hachiman
 your loggings Attempts: 3
Hello! how are you Hachiman
 your loggings Attempts: 4

**Task 3.1 – Functions as Data(Start!)**

<h2>Logs</h2>
Fun recived 4
8

**Task 3.2 Build Your Own Higher-Order Function**

<h3>Logs</h3>
[
  'After tax EmploySalary Name: Subhan salary: $36000',
  'After tax EmploySalary Name: Ali salary: $72000',
  'After tax EmploySalary Name: Zain salary: $108000',
  'After tax EmploySalary Name: ez salary: $135000'
]

**Task 4.1 – Synchronous Callback Flow**

<h3>Logs</h3>
Stating the logs battls
Function 1
Function working1
Function 2
Function working 2
Function 3
Function working 3
Function 4
Function working 4
Function 5
Function working 5
end
Function 5
Function working 5
Function 4
Function working 4
Function 3
Function working 3
Function 2
Function working 2
Stating the logs battls
Function 1
Function working1
end
Function 2
Function working 2
Function 3
Function working 3
Function 5
Function working 5
Function 4
Function working 4
Stating the logs battls
Function 1
Function working1
end

**Task 4.2 – ASynchronous Callback Observation**

<h3>Logs</h3>
AsyncFunction 1
AsyncFunction working 1 
AsyncFunction 2 be running after 1000ms 
execution order
  AsyncFunction 1
AsyncFunction working 1
AsyncFunction 2 be running after 1000ms
AsyncFunction 1 Ended
AsyncFunction 2
AsyncFunction working 2
AsyncFunction 3 be running after 1200ms
AsyncFunction 2 Ended
AsyncFunction 3
AsyncFunction working 3
AsyncFunction 3 will be running after 500
AsyncFunction 3 Ended
AsyncFunction 4
AsyncFunction working 4
AsyncFunction 4 will be running after 700
AsyncFunction 4 Ended
AsyncFunction 5
AsyncFunction working 5
AsyncFunction 5 will be running after 200
AsyncFunction 5 Ended
end
AsyncFunction 1 Ended 
AsyncFunction 2
AsyncFunction working 2
AsyncFunction 3 be running after 1200ms 
AsyncFunction 2 Ended 
AsyncFunction 3
AsyncFunction working 3
AsyncFunction 3 will be running after 500
AsyncFunction 3 Ended 
AsyncFunction 4
AsyncFunction working 4
AsyncFunction 4 will be running after 700
AsyncFunction 4 Ended 
AsyncFunction 5
AsyncFunction working 5
AsyncFunction 5 will be running after 200
AsyncFunction 5 Ended 
end

**Final Project (Medium → Hard)**

<h3>Logs</h3>

Have to build my full-stack app using next-js
First of all it was a hard Challange and it took me long time to complete this The first Behavior i was using SET but it was not working correctly and I have to use map is also Good and i didn't know i can get function just by providing key and saving function was the best part
Second the addTask on config is crazy i get it will call it self again without name and give me maximum CallStack error
Third i came to know if Task Name doesn't exists it will show Task is not a function which i will correct it using if condition and i consulted with ai for dryrun and a bit of a guide but i did this and learn from it
