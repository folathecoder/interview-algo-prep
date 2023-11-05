// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Note:
// Two for loops within the function is not the most efficient route to take because of the time complexity 0(N`2)
// Think about waht type of data structure is available to us and what type of mathematics is available to us
// Create a dictionary, where the index is stored against the respective value (Hash Map)

/// SOLUTION

// @param {number[]} nums
// @param {number} target
// @return {number[]}

// Start with a Brute Force Method (a working version, but not necessarily optimised yet)
// Time complexity: Quadratic complexity

const bruteTwoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// Use an Hash Map
// Time Complexity: O(N)

const twoSum = (nums, target) => {
  const storage = {}; // Initialize an empty object to store potential complements.

  // Iterate over the array, using the index and num.
  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) {
      // If the current num is a key in storage, return the stored index and current index.
      return [storage[num], index];
    }
    // Store the index at the key of 'target - num'.
    // This is because if 'target - num' appears later, we know its index will add up with the current index to equal the target.
    storage[target - num] = index;
  }
};

// Test Brute Force
// console.log(bruteTwoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// console.log(bruteTwoSum([3, 2, 4], 6)); // Output: [1, 2]
// console.log(bruteTwoSum([3, 3], 6)); // Output: [0, 1]

// Test Hash Map
// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
// console.log(twoSum([3, 3], 6)); // Output: [0, 1]
