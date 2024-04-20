//How to find the largest number inside an array

const numbersArray = [2, 5, 40, 33, 76, 80, 12, 96, 20];

let max = numbersArray[0];

for (let i = 0; i < numbersArray.length; i++) {
  let ele = numbersArray[i];
  if (ele > max) {
    max = ele;
  }
}

console.log(max);
//expected output: 96
