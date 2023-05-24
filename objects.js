const o = new Object()
o.firstName="vishal"
o.lastaName="gupta"
o.phoneNo=+916006769605
o.isStudent= true
o.greet = function(){
	console.log("hey, this is vishal gupta")
}

console.log(o.firstName)
//2nd way of creating objects
const o2 ={}
o2.firstName="vishu"
o2.secondName="gupta"
console.log(o.isStudent)
console.log(o2.firstName)

//3rd way to declaring objects

const o3 = {
	1:'hey this is 1',
	isPossible:true,
	youCando:true,
	allSet:true,
	salary:100000,
	company:"ISRO",
	mehnat:"100%",
	address:{
		hno:149,
		wardno:1,
		village:"hutt",
		tehsir:"basohli",
		distt:"kathua",
		state:"j&k"
	}
}

console.log(o3.company,o3.allSet)
console.log(o3["isPossible"],o3["mehnat"])
console.log(o3[1])
console.log(o3.address)
