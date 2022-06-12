
// finding index position with the value which is not in the list 

var arr= ['a','b','c','d'];
function noValue (arr){
    var arr= ['a','b','c','d'];

for (i = 0 ; i < arr.length; i ++)
{
    if (arr[i] === 'e')
    console.log(i);
}
}
noValue(arr);
console.log(noValue);
console.log("This program prints nothing ");

console.log("------------------------");

// printing index position which does not exist in array list (ex:- length of array is 4 , but trying to print index position 6) 
var arr1= ['a','b','c','d'];
function noIndex(arr1) {
    
    var arr1= ['a','b','c','d'];

for (i = 0 ; i < arr1.length; i ++)

{
    console.log(arr1[6]);
}
}
noIndex(arr1)
console.log(noIndex);
console.log(" This program prints Undefined");
