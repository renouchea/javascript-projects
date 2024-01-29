let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let devided = function(nums){
    return nums/2
};
let halved = nums.map(devided);

console.log(halved);
