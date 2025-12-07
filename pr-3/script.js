//1. Write a function that takes an array and returns the sum of all elements.
// let numbers = [10, 20, 30, 40];
//  function sumArray(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }

//     return sum;
// }


// let result = sumArray(numbers); // Function call karke result me sumArray ko  store kiya  
// document.writeln(result);

// 2.Write a function that takes an array and returns the maximum element.
    
//     function maxArray(arr) {
//     let max = arr[0];   // maan lo pehla element hi sabse bada hai

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {   // agar current element max se bada hai
//             max = arr[i];    // toh max ko update kar do
//         }
//     }

//     return max;   // sabse bada number return karega
// }
//    let numbers = [10, 25, 5, 80, 40];

// let result = maxArray(numbers);
// document.writeln(result);

// 3.Write a function that takes an array and returns the minimum element.
    
//    let arr=[10,20,2,50,60];
//   let   min = 10;
// function minArray(arr){
//         for(let i= 1;i<arr.length;i++){
//             if(arr[i]<min){
//                  min=arr[i];
//             }
//         }
//         return min;
//     }

// let result = minArray(arr);
// document.writeln(result);

// 4.Write a function that takes an array and returns the average of all numbers.
// let arr=[10,20,2,50,60];
// let sum=0;
// function sumArray(arr){
//     for(let i=0; i<arr.length;i++){
//         sum = sum+arr[i];
//     }
//     let avr = sum/arr.length;
//     return avr;
// }
// let result = sumArray(arr);
// document.writeln(result);

// 5.Write a function that takes an array and returns a new array in reversed order.

let arr=[10,20,2,50,60];
function rev(arr){
    for(let i= arr.length-1 ;i>0;i--){
         

    }
    let re = arr[i];
    return re;
}
let result = rev(arr);
// document.writeln(result);//???????? douts.

// 6.Write a function that takes an array and returns only even numbers in a new array.

