var containsDuplicate = () => {
  nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
  nums.sort()

  //console.log(nums.sort())
  //console.log(nums.sort((a,b) => a-b ))
  //console.log(nums.sort((a,b) => b-a ))

  return hasDuplicate(nums)
}

const hasDuplicate = (nums) => {
  for (let currentValue = 0; currentValue < nums.length - 1; currentValue++) {
    const nextValue = currentValue + 1

    const isNextDuplicate = nums[currentValue] === nums[nextValue]

    if (isNextDuplicate) return true
  }

  return false
}

console.log(containsDuplicate())
