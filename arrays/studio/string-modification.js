const input = require('readline-sync');
let str = "LaunchCode";
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newstr = (str.slice(3)+ str.slice (0,3));
console.log(newstr);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original string is ${str} and the modified string is ${newstr}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numOfLetter = input.question("Enter the number of letters: ");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numOfLetter <= str.length){
    let newWord = str.slice(numOfLetter) + str.slice(0,numOfLetter);
    console.log("The number of letter is too long");
} else {
 console.log("too many letters requested, defaulting to 3")
 console.log(str.slice(3) + str.slice(0,3));
}