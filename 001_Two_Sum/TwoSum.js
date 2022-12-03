var twoSum = (nums, target) => {
  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      if (nums[a] + nums[b] === target) return [a, b]
    }
  }

  return [-1, -1]
}

console.log(twoSum([2, 7, 11, 15], 9))
