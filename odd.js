// find the odd numbers inside an array.
const myArr = [8,3,7,2,14,6,17,4]

// Using for loop.
const result = []
function findOddNumbers(myArr){
  for(let i=0; i< myArr.length; i++) {
    if(myArr[i] % 2 !== 0){
      result.push(myArr[i])
    } 
  }
 
  return result
}
console.log(findOddNumbers(myArr));
//expected output: [3,7,17]

// Using filter method.
const oddNumbers = myArr.filter(e => {
  return  e % 2 !== 0
})


console.log({oddNumbers});
//expected output: [3,7,17]