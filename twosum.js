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


// PROCESS

// loop thru nums array
// set nums[i] to a variable num1 , you need to touch every part of the array
// target - nums[i] gives us a new number set new number to a variable num2
// if the map has the number set to num2 as a result of subtracting the target and nums[i], return an array of 

nums = [3,2,4]
 target = 6
 
 const twoSum =(array, integer) =>{
     let map = new Map()
     let len = array.lengthlet 
     for(let i=0; i < len; i++){
         let current = array[i]
         let diff = integer - num1
        if(map.has(difference)){
         return [i,map.get(diff)]
      }
      map.set(current,i)
    }
}



 twoSum(nums,target)