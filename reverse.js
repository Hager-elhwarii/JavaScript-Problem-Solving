const numbers = [1, 2, 7, 6, 20, 5, 4, 33];

// Using for loop and push method.
const result = [];
function reversedArray(numbers){
    for(let i= (numbers.length-1); i >= 0; i--){
        result.push(numbers[i])
    }
    return result
}
const res = reversedArray(numbers);
console.log({res});

// Using forEach method and unshift method.
const resultArray = [];
const finalReversedArray = numbers.forEach(e => {
    resultArray.unshift(e)
})
console.log({resultArray});