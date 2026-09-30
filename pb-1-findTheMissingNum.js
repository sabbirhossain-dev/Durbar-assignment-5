function missingNumber(nums) {
  const totalNum = nums.length;

  // Formula: n * (n + 1) / 2

  const expectedSum = (totalNum * (totalNum + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < totalNum; i++) {
    actualSum += nums[i];
  }
  const missingNum = expectedSum - actualSum;
  return missingNum;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
