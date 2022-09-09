console.clear();

var num1 = 10 // Numero entero
var num2 = 10.9 // Numero decimal

console.log(typeof(num1))
console.log(typeof(num2))

// Sumas
var num3 = 15
var sum = num3 + num1 + num2
console.log(sum)

// Restas
var diff = num3 - num1
console.log(diff)

// Multiplicaciones
var mul = num3 - num1
console.log(mul)

// Divisiones
var div = num3 / num1
console.log(div)

var divByZero = num3 / 0
console.log(divByZero) // R: Infinity
console.log(typeof(divByZero)) // R: Number

var mulByString = num3 * 'A'
console.log(mulByString) // R: NaN (not a number)
console.log(typeof(mulByString)) // R: Number
