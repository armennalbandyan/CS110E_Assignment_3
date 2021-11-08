//Create a function that sums two binary numbers. This function should put 
//every digit of both binary numbers into two separate arrays, one for each 
//argument, and make the length of those two arrays equal by adding zeros to 
//the left of the shorter one (using the unshift method). Add those digits with 
//the same index. Don’t forget to use the carry bit variable.
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
console.log(sumOfTowBinaryNumbers([1,0,1,0], [1,0,1]))