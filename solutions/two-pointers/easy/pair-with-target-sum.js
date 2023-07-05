/**
 * Since the given array is sorted, a brute-force solution could be to iterate through the array,
 * taking one number at a time and seraching for the second number through Binary Search.
 * The time complexity of this algorithm will be O(N * logN). 
 * 
 * Or...We can follow the Two Pointer approach. We will start with one pointer pointing to the beginning
 * of the array and another pointing at the end. At every step, we will see if the numbers pointed by the two 
 * pointers add up to the target sum. If they do, we have found our pair; otherwise, we will do one of two things:
 * 
 *   1. If the sum of the two numbers pointed by the two pointers is greater than the target sum, this means that
 *      we need a pair with a smaller sum. So, to try more paris, we can decrement the end-pointer.
 *   2. If the sum of the two numbers pointed by the two pointers is smaller than the target sum, this means that
 *      we need a pair with a larger sum. So to try more pairs, we can increment the start-pointer.
 * 
 * [1] [2] [3] [4] [6] , target = 6
 *  ^               ^
 *  1               6  , 7 > 6 -> need to decrease end-pointer
 *  1           4      , 5 < 6 -> need to increase start-pointer
 *      2       4      , 6 === 6 -> return the start and end index
 * 
 * Time complexity
 * The above algorithm has a time complexity of O(N), where 'N' is the total number of elements in the given array.
 * 
 * Space complexity
 * The algorithm runs in constant space O(1)
 */

function pair_with_target_sum(arr, targetSum) {
  let left = 0,
      right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
    return [left, right];
    }

    if (targetSum > currentSum) {
    left += 1; // we need a pair with a bigger sum
    } else {
    right -= 1; // we need a pair with a smaller sum
    }
  }
  return [-1, -1];
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));


/**
 * An Alternate approach
 * 
 * Instead of using two-pointer or binary search approach, we can utilize a HashTable to search for
 * the required pair. We can iterate through the array one number at a time. Let's say during our iteration
 * we are at number 'X', so we need to find 'Y' such that "X + Y === Target". We will do two things here:
 * 
 * Search for 'Y' (which is equivalent to "Target - X") in the HashTable. If it is there, we have found the
 * required pair. Otherwise, insert "X" in the HashTable, so that we can search it for the later numbers.
 * 
 * Time complexity
 * The time complexity will be O(N), where 'N' is the total number of elements in the given array.
 * 
 * Space complexity
 * The space complexity will also be O(N), as, in the worst case, we will be pushing 'N' numbers into the HashTable.
 * 
 * Here is what our algorithm will look like:
 */

function pair_with_target_sum_alternate(arr, targetSum) {
  const nums = {}; // to store numbers and their indices. Can use new Map() as well
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (targetSum - num in nums) {
      return [nums[targetSum-num], i];
    }
    nums[num] = i;
  }
  return [-1, -1];
}

console.log(pair_with_target_sum_alternate([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum_alternate([2, 5, 9, 11], 11));