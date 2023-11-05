// An Hashmap
// Also known as a dictionary or associative array
// A way to structure data by mapping keys to values
// The goal is to achieve an O(N) complexity when search for values or computing values

// For an array: map index to value

const hashFunction = (numsArr, target) => {
  let hashMap = {};

  for (let i = 0; i < numsArr.length; i++) {
    hashMap[i] = numsArr[i];
  }

  for (let i = 0; i < numsArr.length; i++) {
    let remainderValue = target - numsArr[i];

    if (hashMap[i] + remainderValue === target) {
      return [hashMap[i], hashMap[i]];
    }
  }
  console.log(hashMap);
};

const numsArr = [32, 2, 9, 94, 5];
hashFunction(numsArr);

// console.log(hashFunction(numsArr));
