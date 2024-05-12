//How to find the average inside an array.
const numbersArray = [2, 5, 40, 33, 76, 80, 12, 96, 20];

const sum = numbersArray.reduce((accumlator,currentValue)=> {
    return (accumlator + currentValue) 
},0)
const averageNumber = Math.round(sum / numbersArray.length)
console.log({averageNumber});
