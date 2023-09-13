"use strict";

//Problem

/*
Create a function that takes an array of numbers, and returns "Boom!".If the digit contains 7 in
the array,display "Boom!", otherwise return "there is no 7 in the array".

sample input: SevenBoom([1,2,3,4,5,6,7]); //Boom!
sample input: SevenBoom([1,2,37,4,5,6]);// Boom!
sample input: SevenBoom([1,2,35,4,50,6]);// there is no 7 in the array
             
*/
// Approach-1

function SevenBoom(arr) {
  //console.log(arr); [1,2,3,4,5,6,7]
  //console.log(arr.join("")); 1234567
  //console.log(arr.join().includes(7)); true

  return arr.join("").includes("7") ? "Boom!" : "there is no 7 in the array";
}
console.log(SevenBoom([1, 2, 3, 4, 5, 67]));

//Appraoch-2

// function SevenBoom(arr) {
//   return arr.toString().replaceAll(",", "").includes(7)
//     ? "Boom!"
//     : "there is no 7 in the array";

// }
// console.log(SevenBoom([1, 2, 3, 4, 5, 67]));

//Approach 3

// function SevenBoom(arr) {
//   return arr.toString().includes(7) ? "Boom!" : "there is no 7 in the array";
// }
// console.log(SevenBoom([1, 2, 3, 4, 5, 67]));

// function SevenBoom(arr) {
//   return arr.toString().indexOf("7") ? "Boom!" : "there is no 7 in the array";
//   //   let arrs = [...arr];
//   //   console.log(arrs);
//   //   arr.forEach((el) => {
//   //     // console.log(el);
//   //     console.log(el.includes(7));
//   //   });
// }
// console.log(SevenBoom([1, 2, 3, 4, 5]));
