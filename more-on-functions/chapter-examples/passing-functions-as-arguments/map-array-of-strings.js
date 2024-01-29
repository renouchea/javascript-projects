let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstletter = function (names){
   return names.toString().charAt(0)
};
//console.log(firstletter(names));
let firstInitials = names.map(firstletter);

console.log(firstInitials);
