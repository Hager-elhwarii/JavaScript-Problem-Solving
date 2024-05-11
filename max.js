//How to find the largest number inside an array.
const numbersArray = [2, 5, 40, 33, 76, 80, 12, 96, 20];

// Using for loop.
let max = numbersArray[0];
for (let i = 0; i < numbersArray.length; i++) {
  let ele = numbersArray[i];
  if (ele > max) {
    max = ele;
  }
}
console.log({max});
//expected output: 96

// Using reduce method.
const maxNum = numbersArray.reduce((accumulator,currentValue)=> {
  return Math.max(currentValue,accumulator)
}, numbersArray[0])

console.log({maxNum});
//expected output: 96
