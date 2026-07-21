/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
     let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        // Calculate the middle index safely to prevent potential overflow
        const mid = Math.floor(left + (right - left) / 2);
        
        if (nums[mid] === target) {
            return mid; // Target found, return its index
        } else if (nums[mid] < target) {
            left = mid + 1; // Discard the left half
        } else {
            right = mid - 1; // Discard the right half
        }
    }
    
    // If not found, left represents the correct insertion index
    return left;
};