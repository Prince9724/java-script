 //



//  2.-----> look st thid series 7, 10,8,11,9,12,... what number should come next?
//  let n = 7;   
// for(let i=1;i<=8;i++){
//     document.writeln(n,)
//      if(i%2==1){
//         n+=3;
//      } 
//      else{
//          n -= 2;
//      }
    
// }

//3.-----> Look at this series: 36, 34, 30, 28, 24, ... What number should come next?

// let x = 36;
// for(let i=1; i<=7; i++){
//     document.writeln(x);
//     if(i%2==1){
//         x=x-2;

//     }
//     else{
//         x=x-4;
//     }
// }


// 4.-----> Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?
// let n = 20;
// for(let i=1;i<=8;i++){
//     document.writeln(n,);
//     if(i%2==0){
//         n=n-1
//     }
//     else if(1%2==1){
//         n=n+2
//     }   
// }


// 5.Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?

// let n = 53;
// for(let i=1; i<=5;i++){
     
//     document.writeln(n);
//     document.writeln(n);
//     n=n-13;  
// } 

 
// 6.Look at this series: 21, 9, 21, 11, 21, 13, 21, ... What number should come next?
// let n=21;
// let m =9
// for(let i=1;i<=9;i++){
//  if(i%2==1){
//     document.writeln(n)
//  }
//  else{
//     document.writeln(m)
//     m=m+2;
//  }
// }

//// douts no. 6

// 7.Look at this series: 58, 52, 46, 40, 34, ... What number should come next?
//  let n=58;
//  for(let i=1;i<=7;i++){
//     document.writeln(n);
//     n=n-6;
//  }

// 8.Look at this series: 3, 4, 7, 8, 11, 12, ... What number should come next?
// let n=3;
// for(let i=1;i<=9;i++){
//     document.writeln(n)
//     if(i%2==1){
//         n=n+1;
//     }
//     else if(i%2==0){
//         n=n+3;
//     }
// }


// 9.Look at this series: 8, 22, 8, 28, 8, ... What number should come next?
// let n = 8;
// let m = 22;
// for(let i=1;i<=8;i++){
//     if(i%2==1){
//         document.writeln(n);
//     }
//     else{
//         document.writeln(m);
//         m=m+4;
//     }
// }


// 10.Look at this series: 31, 29, 24, 22, 17, ... What number should come next?
// let n =31;
// for(let i=1;i<=7;i++){
//     document.writeln(n)
//     if(i%2==1){
//         n=n-2;
//     }
//     else 
//         {
//         n=n-5  ;
//     }
// }


// 11.Look at this series: 1.5, 2.3, 3.1, 3.9, ... What number should come next?
//  let n = 1.5;
// for(let i=1;i<=7;i++){
//     document.writeln(n.toFixed (1))
//     n=n+ 0.8  ;
// }


// 12.Look at this series: 14, 28, 20, 40, 32, 64, ... What number should come next?
// let n=14;
// for(let i=1;i<=8;i++){
//     document.writeln(n,)
//     if( i%2==1){
//         n=n*2; 
//        }
//        else{
//         n=n-8;
//        }
//     }


// 13.Look at this series: 2, 4, 6, 8, 10, ... What number should come next?
// let n=2;
// for(let i=1;i<=7;i++)
// {
//     document.writeln(n,);
//     n=n+2;
// }


// 14.Look at this series: 201, 202, 204, 207, ... What number should come next?
// let n=201;
// let diff = 1;
// for(let i=1;i<=6;i++){
//     document.writeln(n,);

// }


// 15.Look at this series: 544, 509, 474, 439, ... What number should come next?
// let n = 544;
// for(let i=1;i<=6;i++){
//     document.writeln(n,);
//     n=n-35;
    
// }


// 16.Look at this series: 80, 10, 70, 15, 60, ... What number should come next?
// let n =80;
// let m=10;
// for(let i=1;i<=7;i++){
//     document.writeln(n,);
//     document.writeln(m,);
//     n=n-10;
//     m=m+5;
// }


// 17.Look at this series: 2, 6, 18, 54, ... What number should come next?
// let n=2
// for(let i=1;i<=6;i++){
//     document.writeln(n,);
//     n=n*3;
// }

// 18.Look at this series: 5.2, 4.8, 4.4, 4, ... What number should come next?
// let n=5.2;
// for(let i=1;i<=6;i--){
//     document.writeln(n,);
//     n = n-0.4;
// }

// 19.Look at this series: 8, 6, 9, 23, 87 , ... What number should come next?
let n=8;
let m=1;
for(let i=1;i<=7;i++){
    document.writeln(n);
    n=(n*i)-(i+1);
     
}
//8*1*-2=6
//6*2-3=9
//9*3-4=23
//23*4-5=87
//87*5-6=429

