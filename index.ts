const nums = [2, 7, 11, 15];
const target = 9;
// Output: [0,1]

const handleTwoSum = (nums, target) => {
  // Declare a hash map to store the values in a dictionary
  let hashMap = {};

  // Loop through the nums array to store each value into the dictionary
  // and check if any value currently stored in the hash map will equal the target value when added

  for (let i = 0; i < nums.length; i++) {
    // Add current value to the hash map
    hashMap[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    // Check the number required to be added to the current value to sum up to the target value
    let remainingNum = target - nums[i];

    // Check if the remaining value exists in the hash map

    if (hashMap[remainingNum]) {
      console.log([i, hashMap[remainingNum]]);
      // return [nums[i], hashMap[remainingNum]];
    }
  }
};

handleTwoSum(nums, target);
