// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = 'Ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7){
    preparedForLiftOff = false;
}
// add logic below to verify all astronauts are ready
if (astronautStatus){
    preparedForLiftOff = true
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (maximumMassLimit > 850000){
    preparedForLiftOff = false
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (minimumFuelTemp || maximumFuelTemp){
  preparedForLiftOff = true
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel){
    preparedForLiftOff = true}
// add logic below to verify the weather status is clear
if (weatherStatus){
   preparedForLiftOff = true
}
// Verify shuttle launch can proceed based on above conditions
if(date && time && astronautCount && astronautStatus && averageAstronautMassKg && crewMassKg && fuelMassKg && totalMassKg && maximumMassLimit && fuelTempCelsius&&minimumFuelTemp && maximumFuelTemp && fuelLevel && weatherStatus){
    console.log(" Space Shuttle is launching")
} else {
    console.log (preparedForLiftOff = false);
}
    