function makeFunctionArray(){
	const arr=[]
	for(var i=0;i<5;i++){
		arr.push(function(){console.log(i)})
	}
	return arr

}

const arr= makeFunctionArray()

arr[0]()

// it prints 0 if we use let
//it prints 5 if we use var --> its a bug because var lifecycle basically tells the function  end
