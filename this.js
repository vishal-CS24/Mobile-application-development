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

const greet = greetings.greet.bind({name:"hello this is vishal gupta calling bind function"})
greet()
greetings.greet.call({name:"this is call function and bound object"})
greetings.greet.apply({name:"this is apply function and bound     object"})
