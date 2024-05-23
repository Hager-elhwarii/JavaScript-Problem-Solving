function primeNumber (n){
    for(let i = 2; i < n; i++){
        if(n % i == 0 ){
            return 'This is not a prime number'
        }
        else{
           return 'It\'s prime number'
        }
    }
}
const result = primeNumber(15)
console.log(result);
//output 'its prime number