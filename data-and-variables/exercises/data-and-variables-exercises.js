// Declare and assign the variables below
let renou_space_shuttle = 'Determination';
let shuttle_speed = 17500;
let distance_to_mars = 225000000;
let distance_to_the_moon = 384400;
let miles_per_kilometer = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof renou_space_shuttle);
console.log(typeof shuttle_speed);
console.log(typeof distance_to_mars);
console.log(typeof distance_to_the_moon);
console.log(typeof miles_per_kilometer);
// Calculate a space mission below
let distance_to_mars_in_miles=distance_to_mars*miles_per_kilometer;
console.log(distance_to_mars_in_miles);
let hours_to_mars = distance_to_mars_in_miles/shuttle_speed;
console.log(hours_to_mars);
let daysToMars = hours_to_mars/24;
console.log(daysToMars);
// Print the results of the space mission calculations below
console.log(renou_space_shuttle +" "+ "will take"+" " + daysToMars + " " + "days to reach Mars.");
// Calculate a trip to the moon below
let distanceToMoonInMiles = distance_to_the_moon*miles_per_kilometer;
console.log(distanceToMoonInMiles);
let hoursToMoon = distanceToMoonInMiles/shuttle_speed;
console.log(hoursToMoon);
let daysToMoon = hoursToMoon/24;
console.log(daysToMoon);
// Print the results of the trip to the moon below
console.log(renou_space_shuttle +" "+ "will take"+" " + daysToMoon + " " + "days to reach the Moon.");