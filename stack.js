//execution stack --> functions invoked by other function get added into the call stack 
//when functions completethey are removed from the srack anf frame below continues excedding

function addOne(num){
	return num+10
}

function getNum(){
return addOne(100)
}

function c(){
	
	console.log(getNum() + getNum())
	}


c()
