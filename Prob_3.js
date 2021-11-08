//Create a function that returns the reverse number of a given number. 
//Example: input = 123 -> returns: 321.
function reverseNum(num) {
	return parseFloat((((num.toString()).split('')).reverse()).join('')) * Math.sign(num)
}
num = 3200
console.log(reverseNum(num))
