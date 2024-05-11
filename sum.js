// Find sum of the numbers inside an array.
function getArraySum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}
const numbers = [1, 2, 7, 6, 20, 5, 4, 33];
const result = getArraySum(numbers);
console.log(result);
//expected output: 28

// Sum using reduce
const sumResult = numbers.reduce((accumulator,currentValue)=> {
  return accumulator + currentValue
},0)
console.log({sumResult});
