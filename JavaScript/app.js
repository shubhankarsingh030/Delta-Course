// let para1 = document.createElement('p');
// para1.innerText = "Hey! I'm Red";
// document.querySelector('body').append(para1);

// para1.classList.add('red');


// let h3 = document.createElement('h3');
// h3.innerText = "Hey! I'm blue h3";
// document.querySelector('body').append(h3);

// h3.classList.add('blue');


// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I'm Inner Div";
// para2.innerText = "Me too";


// div.append(h1);
// div.append(para2);
// div.classList.add("box")

// document.querySelector('body').append(div);

//Qs1.Create a new input and button element on the page using Java Script only.Set the text of button to “Click me”

let button = document.createElement("Element");
let input = document.createElement("input");
button.innerText = "Click Me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Qs2.Add following attributes to the element:
                //-Change placeholder value of input to “username”
                //-Change the id of button to “btn”

button.setAttribute("id","btn");
input.setAttribute("placeholder","Username");

//Qs3.Access the btn using the querySelector and button id.Change the button background color to blue and text color to white.

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

//Qs4.Create an h1 element on the page and set its text to “DOM Practice” underlined.Change its color to purple

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);
h1.classList.add("h1Style");

//Qs5.Create a p tag on the page and set its text to “Apna College Delta Practice”,where Delta is bold.

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);



