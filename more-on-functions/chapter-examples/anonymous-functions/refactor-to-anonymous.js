let reverse = function(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}

console.log(reverse("LaunchCode"));

// my pratice excercise
// 1
let f1 = function(str) {
  return str + str;
};

let f2 = f1;
console.log(f1("abcd"));
console.log(f2("abcd"));

//2
let logger = function(errorMsg) {
  console.log("ERROR: " + errorMsg);
};
let userInput = -2
if (userInput < 0) {
   logger("Invalid input");
}