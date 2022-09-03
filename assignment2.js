// Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene

//const { count } = require("console");

// function TriangleCheck(a,b,c){

//    if(a==b && b==c && c==a)
//    console.log("triangle is equilateral")

//    else if((a==b && b!=c) || (a!=b && b==c) || (a==c && b!=c))
//    console.log("triangle is isoscles")

//    else if((a!=b) && (b!=c)&& (c!=a))
//    console.log("triangle is Scalene")
// }

// TriangleCheck(10,10,11)




//=====================================================================================================

// Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000


// sum=0
//  for(let i=0;i<1000;i++){

//    if((i%3==0) || (i%5==0)){
//    sum=sum+i
//  }
// }

//  console.log(sum)


//====================================================================================

//  Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).4




// function findingFact(lowerNumber,higherNumber){
// console.log(`The prime numbers between ${lowerNumber} and ${ higherNumber} are:`);

// //looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

   
//     if (i > 1 && flag == 0) {
//         console.log(i);
//         findingFactorial(i)
//     }
//  }
// }


// function findingFactorial(i){
//   sum=1
//   for(let a=1; a<=i; a++ ){

//     sum=sum*a
    
//   }
//   console.log(`factorial of ${i} =`, sum)
// }


// findingFact(1,100)





//==================================================================
/*


Write a function using switch case to find the Grade of a student based on marks obtained
a. “S Grade” if the marks are between 90 and 100.
b. “A Grade” if the marks are between 80 and 90.
c. “B Grade” if the marks are between 70 and 80.
d. “C Grade” if the marks are between 60 and 70.
e. “D Grade” if the marks are between 50 and 60.
f. “E Grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”. //  default
*/



// function findingGrade(marks){
  

  
// x=marks/10
// z= Math.trunc(x)
// console.log("z",z)
// switch(z) {
//   case 10:
//     console.log("S Grade")
//     break;
//   case 9 :
//     console.log("S Grades")
//     break;
//   case 8:
//     console.log("A Grade")
//     break;
//   case 7 :
//     console.log("B Grade")
//     break;
//   case 6 :
//     console.log("C Grade")
//     break; 
//   case 5 :
//     console.log("D Grade")
//     break;
//   case 4 :
//     console.log("E Grade")
//     break; 
//   case 5:
//     console.log("Student has failed")                  
//   default:
//   console.log("Invalid marks")

// }
// }

// findingGrade(40)
