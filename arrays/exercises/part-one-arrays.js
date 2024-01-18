//Create an array called practiceFile with the following entry: 273.15
let practiceFile = [273.15];
//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.
practiceFile.push(42);
console.log(practiceFile);
practiceFile.push("hello");
console.log(practiceFile);
//Use a single .push() to add the following items: false, -4.6, and "87".  Print the array to confirm the changes.
practiceFile.push(false,-4.6, "87");
console.log(practiceFile);
// Practice Array from the book 
let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

str = 'LaunchCode students rock!';
console.log(str.split(" "));

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);

let school = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
];

console.log(school[0].push('dance'));
console.log(school[1].push('Holmes'));

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);