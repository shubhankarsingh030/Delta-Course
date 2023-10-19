// function isAdult(){
//     let age = 19;

//     if (age>=18){
//         console.log("Adult");
//     }else{
//         console.log("Not Adult")
//     }
// }
// isAdult();

// function rollDice(){
//     let random = Math.floor(Math.random()*6)+1;
//     console.log(random);
// }

// rollDice();

// function calAvg(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg);

// }
// calAvg(2,4,6);

// function printTable(n) {
//     for (let i=n; i<=n*10; i+=n) {
//     console.log(i);
//     }
// }
// printTable(2);

// function getsum(n) {
//     let sum = 0;
    
//     for(let i=1; i<=n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// Function Scope........

// function calSum(a,b){
//     let sum = (a+b);
//     console.log(sum);
// }
// calSum(1,2);

// let greet = ("Hello");

// function changeGreet(){
//     let greet = "Namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();
// innerGreet();


// const calculater = {
//     num: 55,
//     add: function(a,b){
//         return(a+b);
//     },
//     sub: function(a,b){
//         return(a-b);
//     },
//     mul: function(a,b){
//         return(a*b);
//     }
// };

//Write a Java Script function that returns array elements larger than a number.
// let arr = [5,6,16,54,44,94,54,6,26,46,76];
// let num = 5;

// function getLarger(arr, num){
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > num) {

//             console.log[i];
//         }
//     }

// }
// console.log(getLarger(arr,num));


//Q 1 - Write a JavaScript function to extract unique characters from a string.Example:str=“abcdabcdefgggh”

// let str = "abcdabcdefgggh";

// function getUnique(str){
//     let ans = "";

//     for (let i = 0; i < str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1){
//             ans += currChar;

//         }
//     }
//     return ans;

// }

// console.log(getUnique(str));

// Set TimeOut

// console.log("Hello there");

// setTimeout(() => {
//     console.log("Coding")
// },4000)
// console.log("Welcome to");

// Arrow Function
// const square = (n) => (n*n);
// console.log(square(5));

// let id = setInterval(() => {
//     console.log("Hellow World")
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("Cleared the Interval")

// },10000)

//Qs2.Write a narrow function named is Even()that takes  a single number as argument and returns if it is even or not.

// const isEven = (num) => num % 2 == 0;

// console.log(isEven);

//QS-3 What is the output of the following code;

// const object = {
//     message: "Hellow World",

//     logMessage(){
//         console.log(this.message);

//     }
// };
// setTimeout(
//     object.logMessage, 1000);

// Qs-4 What is the output of the following code

// let length = 4;

// function callback(){
//     console.log(this.length);
// }
// const object = {
//     length: 5,
//     method (callback){
//         callback();

//     },
// };
// object.method(callback,1,2);



