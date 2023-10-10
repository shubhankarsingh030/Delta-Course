// console.log("Nested loop")

// for(let i=1; i<=3; i++) {
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

// let i = 5;

// while(i>=1){
//     console.log(i);
//     i--;
// }

// console.log("Favorite Movie");

// const favMovie = "Avtar";

// let guess = prompt("Guess my favorite movie");

// while(guess != favMovie){
//     if (guess == "quit"){
//         console.log("You Quit");
//         break;
//     }
//     guess = prompt("Wrong Guess ; Please try Again");
// }
// if(guess == favMovie){
//     console.log("Right Guess");
// }

// let fruits = ["Mango","Banana","Apple","Litchi","orange"];
// for(fruit of fruits ){
//     console.log(fruit)
// }

// for(char of "Shubhankar"){
//     console.log(char)
// }

let heroes = [["Batman","SuperMan","WonderWomen"],["Spiderman","Ironman","Captain America"]];

for(list of heroes ){
    for(name of list){
        console.log(name)
    }
}