//Create a function that takes two numbers as its arguments and returns an 
//array that contains all the prime numbers between them inclusively. This 
//function must call your function from question 1 to check each number.
function prime(num) {
    let sqrtNum = Math.floor(Math.sqrt(num));
    if (  num<= 1) {
       return false
    }
    for ( let i = 2; i <= sqrtNum; i++ ) {
        if( num % i === 0) {
            return false;
        }
    }
    return true
}
function primeBetween(a, b) {
let array = [];
for ( let i = a; i <= b; i++) {
    if( prime(i)) {
        array.push(i);
    }
}
return array;
}
console.log(primeBetween(1, 10))