//important higher order  functions
//map --> it is used to map the values with other values
//filter --> it is used to filter the array with some condition
//reduce --> it is used to reduce the multiple values into single vALUE , it takes two arguments in a function

let arr=[1,2,3,4,5]

function addOne(num){return num**2}//function for map
function filterArr(arr){return arr>2}//function for filter 
function reduceArr(arg1,arg2){return arg1+arg2}

console.log("original array is : ",arr)
let reduceAns = arr.reduce(reduceArr)
console.log("sum of array is (reduced) : ",reduceAns)

let ans=arr.map(addOne)
console.log("filtetred aray is contains values > 2 : ",arr.filter(filterArr))
console.log("mapped values are : ")
for(let i=0;i<arr.length;i++){
	console.log(arr[i],"------->",ans[i])
	}
