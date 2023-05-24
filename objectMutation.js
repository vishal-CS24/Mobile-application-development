const o={
	a:"a",
	b:"b",
	obj:{
		key:"key"

	}
}

const o1=o
//both the times o is updated
console.log(o.a)
o1.a="hey i am updated"
console.log(o.a)
o1.a="hey im again updated"
console.log(o.a)
//make new object with keys of another object

const o2 = Object.assign({},o)

o2.obj.key="hey, previous one is key"
console.log(o.obj.key)


