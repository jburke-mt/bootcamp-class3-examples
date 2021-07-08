// example function
// //=====================
// function helloWorld() {
//     console.log("Hello World");
// }

// helloWorld();

// PARAMETERS
// //===============================

// function addNumbers(first, second) {
//     console.log(first + second);
// }

// const valuePassedIn = 10;
// addNumbers(valuePassedIn, 2);

// Returns
// //===============================

// function addNumbers(first, second) {
//     return first + second;
// }

// let x = addNumbers(2, 2);
// console.log(x);

// // ===============

// function addNumbers(first, second) {
//     didntGetHere();
//     return first + second;
// }

// let x = addNumbers(3, 2);
// console.log(x);

// Function Types
// //===============================

// let y = function addNumbers(first, second) {
//     return first + second;
// };

// function doMath(first, second, mathFunction) {
//     return mathFunction(first, second);
// }

// console.log(doMath(1, 2, y));

// Why Functions
// //===============================

// function toCelsius(fahrenheit) {
//     return (5 / 9) * (fahrenheit - 32);
// }
// console.log(toCelsius(77));

// Local Variables
// //===============================

// // code here can NOT use carName

function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
    console.log(carName.length);
}

myFunction();

// code here can NOT use carName
