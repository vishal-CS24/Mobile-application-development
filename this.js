const greetings ={
	name:'Vishal',
	greet:function(){console.log('hello, ',this.name)}
}
//prints answer
greetings.greet()

const friendGreetings={
	name:"Rohit"
}

friendGreetings.greet=greetings.greet
//it prints greetings with new name
friendGreetings.greet()
