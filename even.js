// Find the even numbers inside an array.
const myArr = [8,3,7,2,14,6,17,4]

// Using for loop.
const result = []
function findEvenNumber(myArr){
  for(let i=0; i< myArr.length; i++) {
    if(myArr[i] % 2 == 0){
      result.push(myArr[i])
    } 
  }
 
  return result
}
console.log(findEvenNumber(myArr));
//expected output: [8,2,14,6,4]

// Using filter method.
const evenNumbers = myArr.filter(e => {
  return  e % 2 == 0
})
console.log({evenNumbers});
//expected output: [8,2,14,6,4]