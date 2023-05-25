//create ist object
const o={
	a:"a",
	b:"b",
	obj:{
		key:"keys"}
}
//create a deepcopy function
function deepCopy(obj){
	const keys=Object.keys(obj)
	//create new object which contains all keys having object datatype
	 const newObject = new Object()
	for(let i=0;i< keys.length;i++){
		const key=keys[i]
		if (typeof obj[key]==='object' ){
			newObject[key]=deepCopy(obj[key])
		}
		else{
			newObject[key]=obj[key]
		}
	}
	return newObject
}

//create new object which contains copy of o and can be acessed by using o3 also
const o3= deepCopy(o)
o.obj.key="new key"

console.log(o.obj.key)
console.log(o3.a)
