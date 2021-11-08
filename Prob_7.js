//Create a function that converts a given binary number into its two’s 
//complement negative number. This function must call the functions from 
//questions 5 and 6 (Inverse + 1).
function sumOfTowBinaryNumbers(a,b){
    let len = Math.abs(a.length - b.length);
    if(a.length > b.length){
        for(let i = 0;i < len; i++){
            b.unshift(0);
        }
    }
    else{
        for(let i = 0;i < len; i++){
            a.unshift(0);
        }
    }
    console.log(a + " + " + b);
    let result = [];
    let sum = 0;
    let i = a.length - 1;
    let carry = 0;
    while(i >= 0){
        sum = a[i] + b[i] + carry;
        if(sum > 1){
            result.unshift(sum%2);
            carry = 1;
        }
        else{
            result.unshift(sum);
            carry = 0;
        }
        i--;
    }
    return result;
}
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
function twosComplement(a){
    let result = inverseBinaryNumber(a);
    result = sumOfTowBinaryNumbers(result,[1]);
    return result;
}
let num = [0,1,1,0,1];
result = twosComplement(num);
console.log(result);