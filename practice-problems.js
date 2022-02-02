// Here is a space to track all of your practice problems:

// Two sum:
// Given an array of integers (nums) & an integer (target), return the indices of the two nums that add up to the specified target

var twoSum = function(nums, target) {
    let solutions = [];
    
    for(let i=0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                solutions.push(i);
                solutions.push(j);
            }
        }
    }
    return solutions;
    
};