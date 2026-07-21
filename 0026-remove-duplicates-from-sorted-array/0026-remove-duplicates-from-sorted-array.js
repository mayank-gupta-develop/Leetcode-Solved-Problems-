/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let k = 1; // Pointer for the next unique element position
    
    for (let i = 1; i < nums.length; i++) {
        // If current element is different from the previous unique element
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // Move unique element to the front
            k++; // Increment unique element count
        }
    }
    
    return k;
};