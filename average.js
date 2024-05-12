//How to find the average inside an array.
const numbersArray = [2, 5, 40, 33, 76, 80, 12, 96, 20];

const averageNumber = numbersArray.reduce((accumlator,currentValue)=> {
    return Math.round((accumlator + currentValue) / numbersArray.length)
},0)
console.log({averageNumber});
