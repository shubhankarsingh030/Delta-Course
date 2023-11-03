// let btn = document.querySelector("button");
// console.dir(btn);

let btns = document.querySelectorAll("button");



// btn.onclick = function(){
//     console.log("button was clicked");
// };

// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = Start;
// }

for(btn of btns){
    // btn.addEventListener("click",sayHello);
    btn.addEventListener("onmouseenter",Start);
    // btn.addEventListener("click",Start1);
    btn.addEventListener("dblclick",Start2);
}

function sayHello(){
    alert("Hello!");
}
function Start(){
    console.log("You Entered a button!");
}
function Start1(){
    alert("You Entered a button!");
}
function Start2(){
    alert("You Entered a button with double click");
}