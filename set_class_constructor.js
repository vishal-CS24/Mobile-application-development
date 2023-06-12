//create a class set and have constructor(arr) whichh takes arr as parameter
//there are diff functions of set add , delete, has, and size which are used to perform operations on set

class set{
	constructor(arr){
	this.arr = arr
	}
	add(val){
	if(!this.has(val)) this.arr.push(val)
	}
	delete(val){
		this.arr= this.arr.filter(x => x!== val)
	}
	has(val){
		return this.arr.includes(val)
	}
	get size(){
	return this.arr.length
	}
}

const s = new set([1,2,3,4,5])
s.add(10)
s.add(2)
s.add(1)
console.log('the updated value of s are : ',s)

s.delete(10)
console.log('after deleting 10 the value of 5 is : ',s)

console.log('size of s is : ',s.size)

console.log('6 is present in s or not ',s.has(6))
console.log('5 is in s or not ' , s.has(5))




