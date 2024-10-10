/*// how to select element
// 1.get elementByid
document.getElementById("mainimg");
//  2.get elementbyclass
document.getElementsByClassName("oldimag")
// 3.  get elementbytagname
document.getElementsByTagName("p")
// get element by querySelector
document.querySelector("#mainimg");
document.querySelector(".oldimag");
document.querySelector("p");
// get all element by querySelectorAll
Document.querySelectorAll()

// using properties and method
// 1. innerHTML
//  2. innerText
//   3. outerHTML
// 4.  outerText
// 5.  textContent

// manipulatin attribute
// obj.getAttribute
// obj.setAttribute
// obj.removeAttribute

let img = document.querySelector(".oldimg")

img.getAttribute(".oldimg")
img.setAttribute("oldimg", "images")


// manipulating style
// 1. style
// obj.style
let heading = document.querySelector("h1")

heading.style
heading.style.color = "red"
heading.style.backgroundColor = "green"

console.log(heading)

let box =  document.querySelector(".box");

box .style.width = "500px";
box . style.border = "double";

console.log(box)

// //navigation
// parentElement
//children
//priviousElementSibling

let h4 = document.querySelector("h4")
h4.parentElement
// console.log(h4.parentElement)
// console.log(h4.parentElement.parentElement)


// Adding Element
 document.createElement("p")

// Remove Element
removeChild('h4')
// console.log(h4)

// practic Question

let per1 = document.createElement("p")
per1.innerText = " Hello, I am a paragraph"
document.querySelector('body').append(per1);
per1 .style.color = "blue";

let per2 = document.createElement("h3")
per2.innerText = " Hello, I am a blue h3"
document.querySelector('body').append(per2);
per2 .style.color = "blue";

// DOM Events 
// 1. Event Listener
// 2. Event Object
// 3. Event Types
// 4. Event Bubbling
// inline Evente

// onclick event
let btn = document.querySelector("button");
btn.onclick = function(){

 alert("button clicked")   
    console.dir("button was clicked")
};


let btn = document.querySelector("button");
function sayHello(){
    alert("click")
}
btn.onclick =sayHello;


let btns = document.querySelectorAll("button");{
    for (btn of btns){
        btn.onclick =sayHello;
    }
}
function sayHello(){
    alert("click")
    console.dir("button was clicked")
}

// onMouce Enter


let btns = document.querySelectorAll("button");
    for (btn of btns){
        btn.onclick =sayHello;
        btn.onmouseeter = function(){
            console.log("mouse is over the button");
        };
        console.dir(btn);
 
    }

function sayHello(){
    alert("click")
    
} 
// Event listner
let btns = document.querySelectorAll("button");
    for (btn of btns){
       // btn.onclick =sayHello;
        //btn.onclick =sayName;
     btn.addEventListener("click",sayHello );
     btn.addEventListener("click",sayName );
 
    }

function sayHello(){
    alert("click")}

    function sayName(){
        alert("Mateen Hassan")}
       
     //keyboard events
     let btn = document.querySelector("input");

     btn.addEventListener("keydown", function(){
        console.log("key is pressed");
     })
     btn.addEventListener("keyup", function(){
        console.log("key is pressed");
     })
         
        // Extractin From Data
        let form = document.querySelector("form");
        form.addEventListener("submit"  , function(event){
            event.preventDefault();

            let inp = document.querySelector("inpit");
            console.dir(inp);
            console.log(inp.value);

        });


// let div = document.querySelector("div")
let ul = document.querySelector("ul")
let li = document.querySelector("li")

div.addEventListener("click", function (){
    console.log("div clicked");
});

ul.addEventListener("click", function (event){
    event.stopPropagation();
    console.log("ul clicked");
});

for(li of lis){
    li.addEventListener("click", function (){
        console.log("li was clicked");
    });
}


// Call Stack
function hello(){
    console.log("hello");
}
function world(){
    console.log("world");
    hello();
}

console.log("calling demo")
world(); 

// visualizing the call stack

function one(){
    return 1;
}
function two(){
    return one() + one();
}

function three(){
    let ans =  two(); +  two();
    console.log(ans);
}
    
  //js is Single threaded
  let a  = 1;
  console.log(a);
  let b = 2;
  console.log(b);
  console.log(a+b);

setTimeout(function(){
    console.log("Mateen")
}, 2000);

console.log("hello")
*/
// call back hell

// setTimeout(() =>{
//     h1.style.color  = "red";
// }, 2000);

// setTimeout(() =>{
//     h1.style.color  = "purple";
// }, 3000);
// setTimeout(() =>{
//     h1.style.color  = "yellow";
// }, 4000);
// setTimeout(() =>{
//     h1.style.color  = "green";
// }, 5000);

// h1 = document.querySelector("h1")
// function changeColor(color, delay, nextColorChange){
// setTimeout(() =>  
//      { h1.style.color = color;
//     if(nextColorChange) nextColorChange();
// }, delay)
// }
// changeColor("red", 1000, () =>{
//     changeColor("yellow", 1000, ()=>{
//         changeColor("green", 1000)
//     });
// });

// promicess

// function savetoDb(data, success, failure){
//     let internerSpeed = Math.floor(Math.random()*10)+1;
//     if(internerSpeed  > 5){
//       success();
    
// }else{
// failure();
// }
// }
// savetoDb("Nayyer tech", () =>{
//     console.log("data saved");
// },
// () =>{
//     console.log("data saved");} )


//     function savetoDb(data, success, failure){
//         return new  Promise((success, failure) => {

//         let internerSpeed = Math.floor(Math.random()*10)+1;
//         if(internerSpeed  > 5){
//           success();
        
//     }else{
//     failure();
//     }
//     });

// }
// savetoDb("Nayyer tech")

// promise then() and catch()

// let request = saveToDBPromise ("Nayyer tech");
// request.then(() => {
//     console.log("data saved");
// })
// .catch(() => {
//     console.log("data not saved");
// })

// promise channing
//  let request = saveToDBPromise ("Nayyer tech");
//  request.then(() => {
//          console.log("data saved");
//          saveToDBPromise("Hello world")
//          .then(()=>{
//             console.log("saved")
//          })
//  })
//  .catch(()=>{
//     console.log("data not saved");
//  })


// call back hell



// h1 = document.querySelector("h1")
// function changeColor(color, delay, nextColorChange){
//     new Promise((resolve, reject)=>{
//         setTimeout(() =>  
//             { h1.style.color = color;
//                 resolve("color changed");}
//             , delay);
//     })

//     changeColor("red", 1000)
//     .then(()=>{
//         console.log("color changed");
//         return changeColor("orange", 1000);
//     })
//     .then(()=>{
//         console.log("color changed");
//         return changeColor("green", 1000);
//     })
//     .then(()=>{
//         console.log("color changed");
//         return changeColor("blue", 1000);
//     })
//     .then(()=>{
//         console.log("color changed");
       
//     })


// setTimeout(() =>  
//      { h1.style.color = color;
//     if(nextColorChange) nextColorChange();
// }, delay)
// }

// changeColor("red", 1000, () =>{
//     changeColor("yellow", 1000, ()=>{
//         changeColor("green", 1000)
//     });
// });