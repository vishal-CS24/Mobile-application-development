const o={
	a:"a",
	b:"b",
	obj:{
		key:"keys"}
}
function deepCopy(obj){
	const keys=Object.keys(obj)
//	const newObject() = {}
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

const o3= deepCopy(o)
o.obj.key="new key"

console.log(o.obj.key)
console.log(o3.a)
