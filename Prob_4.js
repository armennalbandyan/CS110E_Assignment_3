//Create a function that checks if a number is a palindrome by calling the 
//functions from question 3.
function reverseNum(num) {
	return parseFloat((((num.toString()).split('')).reverse()).join('')) * Math.sign(num)
}
num = -567
console.log(reverseNum(num))
if (reverseNum(num) === num){
    console.log("Palindrome")
}else{
    console.log("notPalindrome")
}