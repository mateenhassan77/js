let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function (){
    let item = document.createElement("li");
    item.innerHTML = inp.value;
    let delbtn = document.createElement("button")
    delbtn.innerHTML = "Delete";
    item.appendChild(delbtn);
    delbtn.classList.add("delete")
    ul.appendChild(item);
    console.log(inp.value);
    inp.value= "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete")
    }
   
})

// let delBtns = document.querySelectorAll(".delete");
// for ( let delbtn of  delBtns){
//     delbtn.addEventListener("click", function(){
//         let  parent = delbtn.parentElement;

//         delbtn.parentElement.remove();
//         console.log("Element Deleted");
//     })
// }