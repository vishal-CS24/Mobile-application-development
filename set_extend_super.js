//create a class set and have constructor(arr) whichh takes arr as parameter
//there are diff functions of set add , delete, has, and size which are used to perform operations on set
//new set is xcreated with predious one 
//extends create a new class from the existing class and super is used to give the refrence to the the base class

class Myset extends set{
	constructor(arr){
	super(set)
	this.originalArray  = arr
	}
	add(val){
	super.add(val)
	console.log('hey we entered ${val} value itnt new set')
	}
	toArray(){
	return Array.from(this)
}
reset(){
return new Myset(this.originalArray)
}

}

const s = new set([1,2,3,4,5])
s.add(10)
s.add(2)
s.add(1)
console.log('the updated value of s are : ',s)



