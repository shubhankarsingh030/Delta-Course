// For_Each Method

// let arr = [1,2,3,4,5];

// arr.forEach(function(el){
//     console.log(el);
// });

// let print = function(el){
//     console.log(el);
// };

// arr.forEach(print);

// Map Method

// let num  =[1,2,3,4,5,6];

// let double = num.map((el) => {
//     return el*2;
// })

// Filter Method

// let nums = [1,2,3,4,5,6];

// let ans = nums.filter((el) => {
//     return el  % 2 == 0
// });

// Reduce Method

// let nums = [1,2,3,4,5,5,5];

// let result = nums.reduce((result, el) =>( result + el));
// console.log(result)

// Maximum in Array

// let arr = [1,2,3,4,5,6,6,7,8,20];

// let max = arr.reduce((max, el) => {
//     if (max < el){
//         return el;
//     } else{
//         return max;

//     }
// });
// console.log(max);

// Qs- Check all the no. in array are multiple of 10 or not

// let arr  = [1,3,4,10,20,30,];
// let arr2  = [10,30,40,10,20,30,];

// let mul = arr.every((el) => el%10 == 0);
// console.log(mul)
// let mul2 = arr2.every((el) => el%10 == 0);
// console.log(mul2)

// Qs- creat a function to find the minimum array

// let num = [2,4,5,56,2,1,-1];

// function getMin(num){
//     let min = num.reduce((min, el) => {
//         if (min < el){
//             return min;
//         }else{
//             return el;
//         }
//     });

//     return min;
// }


//Spread Array

// let arr = [1,2,3,4,5,6];
// let newArr = [...arr];

// let char = [..."Hello"];

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums = [...odd, ...even];

// const data = {
//     email: "ewkcnwk@202",
//     password: "cdecs",
// };

// const dataCopy = {...data, id: 123 }

// Rest..............


