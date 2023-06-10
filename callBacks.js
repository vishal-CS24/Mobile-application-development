//it will print 1 after 1 second
function callBacksAsyc(callback){
	setTimeout(function(){callback(1)},1000)
}

callBacksAsyc(console.log)
