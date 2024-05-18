const numbers = [20,8,17,3,12,9];

const sortedArray = numbers.sort(function compare(a,b) {
    return a - b;
})

console.log({sortedArray});
//expected output: [ 3, 8, 9, 12, 17, 20 ]


