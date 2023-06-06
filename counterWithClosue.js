const ans = (function(){
	let count =0

	return{
		incr: function(){count=count+1},
		get: function(){console.log(count)}

	}
})()

ans.incr()
ans.get()
ans.incr()
ans.get()
