console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
hello();
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  let greeting = 'Hello, ' + name + '!';
  return greeting;
}
helloName();
// Remember to call the function to test
console.log(helloName('Paul'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  let total = firstNumber + secondNumber;
  return total;// return firstNumber + secondNumber;
}
addNumbers();
console.log(addNumbers(5, 6));

// 4. Function to multiply three numbers & return the result
function multiplyThree(oneNum, twoNum, threeNum) {//create arguments oneNum, twoNum, threeNum for multiplyThree
  let total = oneNum * twoNum * threeNum;// create total and set it to mutiplying the three arguments
  return total;//return total
}
multiplyThree(); //return multiplyThree
console.log(multiplyThree(4, 5, 6)); //console log the function with the nubmers assigned to the arguments


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {

  if (number > 0) {
    return true;
  } else if (number <= 0) {
    return false;
  }
}
isPositive();
console.log(isPositive(-3)); //log a negative number expect the return to be false
console.log(isPositive(6));   //log a positive number,expected return to be true
console.log(isPositive(0));   // log zero, expected return to be false



// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(myArray) {
  if (myArray > []) { return myArray[myArray.length - 1]; }//create function to reture the last item in an array. 
  return 'undefined';//Check if the array is empty, if not, return the last item using the .length method to access the last item. If it is, return undefined.
};
console.log(getLast([7, 8, 6, 9]));
console.log(getLast([]));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let array = [4, 5, 6]//establish array
function find(value, array) {//find is a function that checks if value is in array.  
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {//starting at the index of zero, check if the number at that array index is 
      return true;
    }
  } return false;// equal to value.  If it is, return true. Increase by one index and repeat. If no numbers equal value return false.
};

console.log(find(7, array));//log with a number outside of array, expect false.
console.log(find(4, array));//log with a number inside of the array, expect true.



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.substring(0, 1)) { return true }
  else { return false };

}
console.log(isFirstLetter('p', 'paul'));
console.log(isFirstLetter('j', 'Killroy'));


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {   //function sumAll that uses parameters array
  let sum = 0;              //establish sum and set it to the number 0
  for (let i = 0; i < array.length; i++) {//starting at the index of zero, consider each element until you hit the index number before array length
    sum += array[i];                        //sum is equal to the element at the index + the previous sum.  
  };
  return sum;        //return sum, after the loop completes

}

console.log(sumAll([5, 10, 15, 20]))//test the code, expected output in the console is 50
// TODO: loop to add items


// TODO: return the sum





// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive(originalArray) { //create function called allPositive with parameter originalArray
  console.log('allPositive running');//logged allPositive to see that its working
  let clonedArray = [];//created clonedArray and set it to empty. 
  console.log(originalArray);//logged the originalArray to see begining inputs
  console.log(clonedArray);//logged the clonedArray to verify its empty
  for (i = 0; i < originalArray.length; i++) {//for loop, starting at index 0 of originalArray, increasing by one index, until index equals length of orignalArray
    if (originalArray[i] > 0) { clonedArray.push(originalArray[i]); }//if the element of the originalArray is greater than 0, clone it to cloneArray 
    ; console.log('This is the positives only ', clonedArray);//log the clonedArray with positive nubmers only, 
    console.log('This is the input array ', originalArray);//log the input array with all numbers
  }
  return clonedArray;//the output of the function



}
console.log(allPositive([2, 3, -4, -5, 0]));//console logged a mix of positive, negative and zero numbers.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
