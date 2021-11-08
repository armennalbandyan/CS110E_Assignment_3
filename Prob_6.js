//Create a function that inverses and returns a given binary number. Example: 
//1101 -> 0010.

function inverseBinaryNumber(a){
    let result = [];
    for(let i = 0; i < a.length; i++){
        if(a[i]===0){
            result[i]=1;
        }
        else{
            result[i] = 0;
        }
    }
    return result;
}
console.log(inverseBinaryNumber([1,0,1,0,1,0]))








/*function binaryInverse(num){
    let inverse = Array.from(num, n=>1-n).join('')
    console.log(inverse)
}
console.log(binaryInverse(011))


/*function binaryReverse(num){
    return parseInt(num.toString(2).split('').reverse().join(''), 2)
}

console.log(binaryReverse(56))
*/