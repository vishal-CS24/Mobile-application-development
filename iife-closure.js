//iife is immediately invoked function expression
function makeFunctionArray(){
	const arr=[]
	for(var i=0;i<5;i++){
		arr.push(
		(function(x){
			return function(){console.log(x)
		}
		})(i)
		)
	}
	return arr

}

const arr= makeFunctionArray()

arr[1]()

