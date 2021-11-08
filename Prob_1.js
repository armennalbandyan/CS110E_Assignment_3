//Create a function that takes a number as its argument and returns true if a 
//number is a prime number and false otherwise. Hint: A number is a prime 
//number when it is divisible only by one and itself. If a number is not divisible 
//to any number starting 2 to the SQRT of itself, then that number is a prime 
//number.
function prime(num) {
    let sqrtNum = Math.floor(Math.sqrt(num));
    if ( num <= 1) {
        return false
    }
    for ( let i = 2; i <= sqrtNum; i++ ) {
        if ( num % i === 0) {
            return false;
        }
    }
    return true
}
console.log(prime(17))


















/*function isPrime(num) { // returns boolean
    if (num <= 1) return false; // negatives
    if (num % 2 == 0 && num > 2) return false; // even numbers
    const s = Math.sqrt(num); // store the square to loop faster
    for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
        if(num % i === 0) return false; // modulo shows a divisor was found
    }
    return true;
  }
  console.log(isPrime(1));




/*function isPrime(num) {
    let sqrtnum=Math.floor(Math.sqrt(num));
      let prime = num != 1;
      if (num <= 0){
        console.log("Your number must be positive integer")
        
    }else if (num === 1){
        console.log("Your number is not prime")
        
    }else if ((num === 2) || (num === 3)){
        console.log(num, "is a prime number")
        
    }else{
      for(let i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
    }
      return prime;
  }
  
console.log(isPrime(0))


*/
/*
num = 25
numSqrt = Math.floor(Math.sqrt(num))
if (num <= 0){
    console.log("Your number must be positive integer")
}else if (num === 1){
    console.log("Your number is not prime")
}else if ((num === 2) || (num === 3)){
    console.log(num, "is a prime number")
}else {
        for(let i=3; i <= numSqrt; i+=2){
            if (num % i === 0){
                console.log("Nmber is not prime")
                
            }else{
                console.log("number is prime")
                
            }
        }
    }
*/