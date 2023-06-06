//directly calling of function in single line
const newFunction=(function(){
	const mes="hello this is  vishal gupta"
	//function 2 --> it can access the varibale value that is declared inside its parent i.e closure!
	function newFunction(){
		console.log(mes)
	}

	return newFunction
})()
//it prints what return statement returns in this case it is function.
console.log(newFunction)
//it is not going to print any thing
newFunction
//calling of child  function --> it gives output
newFunction()
//prints whole structure of child function
console.log(newFunction.toString())

