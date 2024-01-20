let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
    console.log(reversed);
}
// it prints differently when the console.log inside or out side "for loop{}"
for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;   
}
console.log(reversed);