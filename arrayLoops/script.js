
// loops we can perform in an array 

// for loop 

// my Todo list for everyday


console.log("-----------Method 1------------");
console.log("-----------For loop------------");

let myTodo = ["drink water every 2 hrs " , "sleep for 6 hrs", "do exercise", "meditation", "learn new things"];


for (let i =0; i < myTodo.length; i++){
    console.log(myTodo[i]);
}


// for loop with if condition inside it 



console.log("-----------Method 2------------");
console.log("-----------For loop with If Condition------------");
//printing only even numbers from an array

let a = [1,2,3,7,9,6,8,0,4,5,6,7,8,9,10]
function printEvenArray(a) {
    

for (j = 0; j < a.length; j++){
    if (a[j] % 2===0){
        console.log(a[j]);
    }
    
}
}
printEvenArray(a)

console.log("-----------Method 3------------");
console.log("-----------While loop------------");

// while loop 
// program  to print the shapes 

let shapes = [ "square" , "rectangle", "circle"];
function whileArray(shapes) {
    let k = 0;
    while (k <shapes.length){

console.log(shapes[k]);
        k++;
    }
   
    
}
whileArray(shapes)

// do while in an array

console.log("-----------Method 4------------");
console.log("-----------Do While loop------------");

let text = ["red", "blue", "green"]
let x = 0;

do {
    console.log(text[x]);  
  x++;
}
while (x < text.length);

console.log("-----------Method 5------------");

var details = [
    {id: 101, name: 'Jack', age: 37},
    {id: 102, name: 'Trevor', age: 45},
    {id: 103, name: 'Logan', age: 29},
    {id: 104, name: 'Katie', age: 23},
    {id: 105, name: 'Perry', age: 28}
];

for (let profile of details) {
    console.log(profile.name , profile.age)
}


