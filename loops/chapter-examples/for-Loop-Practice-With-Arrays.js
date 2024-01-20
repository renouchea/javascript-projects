// create an array variable containing the names
let nameall = ["Renou","Rotha","Mey","Rothana"];
// write a for loop that prints each name on a different line
for (let i=0;i<nameall.length;i++){
    console.log(nameall[i]);
}

let phrase = "Chili Cook-off";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}
console.log(phrase.length); // phrase.length is 14. it does count the empty space for string. 1 space count as 1 string.

for (let i = 0; i < 100; i++){
    console.log("Repetition is a good thing.");
 }