// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

//Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// PROCESS - USING A HASH MAP
// create a new map 
// loop thru nums array
// set nums[i] to a variable "current" , you need to touch every part of the array
// target - current gives us a new number set new number to a variable "difference"
// if the map has the number set to difference as a result of subtracting the target and current,return an array of the indicies of both current and difference


nums = [3,2,4]
target = 6
 
const twoSum = function(nums, target) {
    let map = new Map()// set new object using map
    let len = nums.length// variable to check length of nums
    for(let i = 0; i < len; i++){ //loops thru nums array
        let current = nums[i]// set variable of current element of nums array during loop
        let diff = target - current// set variable of number of difference of target and current, number we are now looking for in map
        if(map.has(diff)){ // map.has returns true if a key exists in a Map/ conditonal to see if diff is in map/ 
            return [i,map.get(diff)] // map.get returns the value of the key/ if conditional met return array index of i and index of diff
        }
        map.set(current,i) // You can add elements to a Map with the set() method
      }
    }



 twoSum(nums,target)