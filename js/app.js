'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
//
// Write a function called sum() that takes in two numbers as arguments...
function sum(a, b) {

  // add a and b
  let addedNumbers = a + b;
  // console.log(addedNumbers);

  // return a concatenated string (string iterpolation)
  let sentence = `The sum of ${a} and ${b} is ${addedNumbers}.`;

  // return an array
  return [addedNumbers, sentence];

}
// console.log(sum(1,2));

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) {

  // return an arreay

  let product = a * b;

  let productString = `The product of ${a} and ${b} is ${product}.`;

  return [product, productString];

}

// console.log(multiply(3,4));

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) {

  let numSum = sum(a, b);

  let numSum2 = sum(numSum[0], c);

  let numProduct = multiply(a, b);

  let numProduct2 = multiply(numProduct[0], c);

  let q3String1 = `${a} and ${b} and ${c} sum to ${numSum2[0]}.`;

  let q3String2 = `The product of ${a} and ${b} and ${c} is ${numProduct2[0]}.`;

  return[numSum2[0], numProduct2[0], q3String1, q3String2];

}
// console.log('***********');
// console.log(sumAndMultiply(2, 3, 4));

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4];
let potato = [5,6,7];

function sumArray(inputArray) {

  let testArraySum = sum(inputArray[0], inputArray[1]);
  let testArraySum2 = sum(testArraySum[0], inputArray[2]);

  // console.log('++++++++');
  // console.log(testArraySum);
  // console.log('_____________________');
  // console.log(testArraySum2);

  return [testArraySum2[0], `${inputArray[0]},${inputArray[1]},${inputArray[2]} was passed in as an array of numbers, and ${testArraySum2[0]} is their sum.`];

}

// Here is the test for sumArray(); uncomment it to run it
// console.log('********');
// console.log(sumArray(testArray));
// console.log('==========');
// console.log(potato);
// console.log(sumArray(potato));

testSumArray(testArray);
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

let myArray = [2, 3, 4];

// Write your code here
function multiplyArray(multArr) {

  let arrayProduct1 = multiply(multArr[0], multArr[1]);
  // console.log(arrayProduct1);

  let arrayProduct2 = multiply(arrayProduct1[0], multArr[2]);
  // console.log(arrayProduct2);

  let arrayString = (`The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${arrayProduct2[0]}.`);
  // console.log(arrayString);

  return [arrayProduct2[0], arrayString];

}

// console.log(multiplyArray(myArray));

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1,2,3,4,5];

// console.log(testDynamicArray[0]);

function multiplyAnyArray(dynamicArray) {

  let total = 1;


  console.log ('++++++++++');
  console.log(total);

  // for the length of the array, do the following...
  for(let i = 0; i < dynamicArray.length; i++){
 
    let result = multiply(total, dynamicArray[i]);
    total = result[0];

    console.log('++++++++++');
    console.log(i);
    console.log(dynamicArray[i]);
    console.log(result);
  }

  return [total, `The numbers ${dynamicArray} have a product of ${total}.` ];


}

// let tomato = multiplyAnyArray(testDynamicArray);
// console.log('__________');
// console.log(tomato);




// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
