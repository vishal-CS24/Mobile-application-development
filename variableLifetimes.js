let a=10
console.log(a)
a++
console.log(a)
//we cannot change const values
const b=10
console.log(b)
//b++ // gives an error
//console.log(b)

let obj={}
obj.a="a"
console.log(obj.a)
//it can be changed
const obj1={}
obj1.b="a"
console.log(obj1.b)

//we cannot be declair same names again and again errors!!
// we cannot print value without declaring it

//var allows to declair new names with name names --- over rides this is called shadowing
//if we call var type before declaring then it will gives undefines
console.log(p)
var p=1
p=12
console.log(p)

var p = "hello"
console.log(p)
//calling a function before declaration
thisisHosted()
notHosted() //calling const function before declaration 
//declaring A function-- > it can be called before or after declared

function thisisHosted(){
	console.log("this is a function that is declared at the bottom of all others")
	}
//funtion 2 with const and is not called before declaration

const notHosted = function(){
	console.log("hey this is const function")
}
notHosted()
