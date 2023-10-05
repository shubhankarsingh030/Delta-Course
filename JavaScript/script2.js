// alert("Hello Guys");

// let firstName = prompt("Enter your First Name ");
// let lastName = prompt("Enter Your Last Name ");
// let msg = "Welcome " + firstName + " " + lastName + "!";
// alert(msg)

let num = 530;

if(num % 10 == 0){
    console.log("Good");
}else{
    console.log("Bad");
}
// let name = prompt("User's Name");
// let age1 = prompt("enter your age")

// alert(`${name} is ${age1} years old.`)

let month = "Quarter4";

switch(month){
    case "Quarter1":
        console.log("January, February, March")
        break;
    case "Quarter2":
        console.log("April, May, June")
        break;
    case "Quarter3":
        console.log("July, August, September")
        break;
    case "Quarter4":
        console.log("October, November, December")
        break;
    default:
        console.log("Enter The Quarter!")

}

let str2 = "Approx";

if((str2[0] === "A" || str2[0] ==="A") && (str2.length > 5)){
    console.log("Golden String")
}else{
    console.log("Not Golden String")
}

let x =10;
let y =55;
let z =116;

if (x>y){
    if (x>z){
        console.log(x, "is the largest number");
    }else{
        console.log(z,"is the largest number");
    }
}else{
    if (y > z){
        console.log(y, "is the largest number");
    }else{
        console.log(z, "is the largest number");
    }
}

let num3 = 32;
let num4 = 47852;

if ( (num3 % 10) === (num4 % 10)){
    console.log("number has the same last digit  which is", num3 % 10);
}else{
    console.log("number don't have same last digit ")
}