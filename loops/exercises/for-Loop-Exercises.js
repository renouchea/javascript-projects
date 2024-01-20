/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. 
    (Your code should work even if you replace 50 or 20 with other numbers). */
//a
let num = 21
for(i=0;i<num;i++){
 console.log(i);
}
//b
//let numb = 30;
//for(i=3;i<=num;i=i+2){ // use wrong variable num. that's why it print odd number until the 21. it should be numb like the below code.
  //console.log(i);
//}
let numb = 30;
for(i=3;i<numb;i=i+2){
  console.log(i);
}
//c
let numc = -15;
for(i=12;i>numc;i=i-2){
  console.log(i)
}
//d Not sure about this one ???? why it prints 21 ???
let numd = 19;
for(i=50;i>=numd;i=i-1){
  if (i % 3 ===0){  
     console.log(i)}
}
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

let strloop = "LaunchCode";
let arrayloop= [1, 5, 'LC101', 'blue', 42];
for(i=0;i<arrayloop.length;i++){
  console.log(arrayloop[i])
}
let reversed =""
for(i=0;i<strloop.length;i++){
  console.log(reversed=strloop[i] + reversed);
}
 console.log(reversed);
/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
let arrayloop2 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evenarray = [];
let oddarray = [];
for (i=0;i<arrayloop2.length;i++){
  if (arrayloop2[i] % 2 ===0){
  evenarray.push(arrayloop2[i])
  } else oddarray.push(arrayloop2[i])
} 
console.log(evenarray);
console.log(oddarray);