console.log("Hello World!!!!");
console.log("Apna College");
let a = 5;
let b = 55;
console.log("The sum of a & b is", a + b)

let pencilPrice = 5;
let eraserprice = 10;
let output = `The total price is : ${pencilPrice + eraserprice} Rupees`;
console.log(output);



console.log("before the use of if statement");
let apple = 25;
if (apple >= 20){
    console.log("You Can Eat")
}

if(apple < 20){
    console.log("You Can Not Eat")
}
console.log("after the use of if statement");

//Traffic Light System by if else
let trafficLight = "Red";

if (trafficLight == "Red"){
    console.log("STOP")
}else if(trafficLight == "Yellow"){
    console.log("SLOW DOWN")
}else if (trafficLight == "Green"){
    console.log("GO")
}

//Traffic Light System by Switch Statement
let color = "green";

switch(color){
    case "red" :
        console.log("Stop")
        break;
    case "yellow" :
        console.log("Slow Down")
        break;
    case "green" :
        console.log("Go")
        break;
    default :
        console.log("Light Is Broken")
    
}

//Vote
let age = 18;
if(age >= 18){
    console.log("You Can Vote")
}else{
    console.log("You Can't vote")
}

//PopCorn Rate

let PopCorn = "S";

if(PopCorn === "XL"){
    console.log("Price is Rs.250")
}else if(PopCorn === 'L'){
    console.log("Price is Rs.200")
}else if(PopCorn === 'M'){
    console.log("Price is Rs.100")
}else{
    console.log("Price is Rs.50")
}

//Nested if-else

let marks = 56;

if(marks >= 33){
    console.log("Pass!");
    if(marks >=80){
        console.log("Grade - A++")
    }else{
        console.log("Grade - A")
    }
}else{
    console.log("Fail!!!")
}
//find Good String

let str = "apple";
if (str[0] === "a" && str.length > 3){
    console.log("Good String")
}else{
    console.log("Not a Good String");
}
//print Day of the Week

let day = 1;

switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Wrong Day!")

}
