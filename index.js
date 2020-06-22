
function largestSubarraySum(nums) {
    let currentMaxSum = 0;
    let currentSum = 0;

    nums.forEach(num => {
        currentSum += num;

        if(currentSum > currentMaxSum){
            currentMaxSum = currentSum;
        }

        if(currentSum < 0){
            currentSum = 0;
        }
    })

    return currentMaxSum;
}