// Array methods 
// forEach

 /* let arr = [1, 2, 3, 4, 5];
 let print = function(el){
    console.log(el);
 };



 arr.forEach(print);

 arr.forEach(function(el){
    console.log(el);
 }); 
 
 let arr =[
    {name: 'John',
     age: 25,
    },
    {
        name :  'Jane',
        marks :  90,

    },
    {
        name : 'John',
        marks :   90,
    }

 ]
 arr.forEach((student) => {
console.log(student);
 }); 

 // map
 let num =  [1, 2, 3, 4, 5];
 let doubleNum = num.map(function(el){
    return el * 2; 

 });
 console.log(doubleNum); // [2, 4, 6, 8, 10


 let num1 =  [1, 2, 3, 4, 5];
 let double = num.map((el) =>{
    return el * 2; 

 });
 console.log(doubleNum); // [2, 4, 6, 8, 10

 
 let arr =[
    {name: 'John',
    marks : 25,
    },
    {
        name :  'Jane',
        marks :  94,

    },
    {
        name : 'John',
        marks :   90,
    },

 ];
  let gpa  = arr.map((student) => {
    return  student.marks / 10;

  });
  console.log(gpa); // [9, 9, 9]


  // Filter

  let num = [1, 2, 3, 4, 5, 6, 7, 8,9, 10];
  let evenNum = num.filter((el) =>{
    return el % 2 == 0;
  });
  console.log(evenNum);

  let num1 = [1, 2, 3, 4, 5, 6, 7, 8,9, 10];
  let oddNum = num.filter((el) =>{
    return el % 2 != 0;
  });
  console.log(oddNum);
  
   // Every method
   let num = [2, 4, 6, 8,]; 
   num.every((el)=>{
    return el%2 == 0;
   });
   console.log(num);
     
    // Reduce method
    let num =[1, 2, 3, 4, 5, 6, 7, 8, 9,];
    let sum = num.reduce((acc, el) =>{
    return  acc + el;

    });
    console.log(sum);
    
   // using loops f to reduce method 

   let arr = [1, 4, 3, 5, 6, 7, 8,9,];
   let max = -1;

   for(let i=1; i< arr.length; i++)
   {
    if(arr[i] > max){
        max = arr[i];
    }
   }
   console.log(max);

  // using reduce method to find max number in array
  let arr = [1, 4, 3, 5, 6, 7, 8,9,];
  let max = arr.reduce((max, el) =>{
   if(max < el){
    return el;
   }else{
    return max;
   }
  });
  console.log(max);
     
    // default perametrs
    function sum  (a, b=8 ) {
        return a + b;
    }
    console.log(sum(5)); 
 
   // spread
   let arr1 = [1, 2, 3, 4, 5];
   let arr2 = [...arr1, 6, 7, 8];
   console.log(arr2);
  
  // Rest
  function sum(...args) {
    return args.reduce((add, el)=> add + el);
  };
  console.log(sum);

//  // Destructuring
 let person = ["tony", "bruce", "steve",  "clark"];
 let [winner,  runner, forth,] = person;
 console.log(winner, runner, forth);
 
 // Destructuring objets

 const student ={
    name: "tony",
    age: 25,
    gender: "male",
    username : "tony123"
 };

 let { name, age, gender} = student;
 console.log(name, age, gender);

*/
 // Now startin DOM
 
    

