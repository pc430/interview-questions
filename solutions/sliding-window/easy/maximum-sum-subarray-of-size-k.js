/**
 * Solution 1:
 * A basic brute force solution will be to calculate the sum of all ‘k’ sized subarrays of the given array to find the 
 * subarray with the highest sum. We can start from every index of the given array and add the next ‘k’ elements to find the 
 * subarray’s sum. The time complexity will be O(N*K) where ‘N’ is the total number of elements in the given array. 
 * Is it possible to find a better algorithm than this?
 * 
 * Solution 2:
 * If you observe closely, you will realize that to calculate the sum of a contiguous subarray, we can utilize the sum of the 
 * previous subarray. For this, consider each subarray as a Sliding Window of size ‘k.’ To calculate the sum of the next subarray, 
 * we need to slide the window ahead by one element. So to slide the window forward and calculate the sum of the new position of 
 * the sliding window, we need to do two things:
 *   1. Subtract the element going out of the sliding window, i.e., subtract the first element of the window.
 *   2. Add the new element getting included in the sliding window, i.e., the element coming right after the end of the window.
 * This approach will save us from re-calculating the sum of the overlapping part of the sliding window.
 * 
 * Time Complexity
 * The time complexity of the above algorithm will be O(N).
 * 
 * Space Complexity#
 * The algorithm runs in constant space O(1).
 */

// Brute Force
function brute_max_sub_array_of_size_k(k, arr) {
  let maxSum = 0,
    windowSum = 0;

  for (i = 0; i < arr.length - k + 1; i++) {
    windowSum = 0;
    for (j = i; j < i + k; j++) {
      windowSum += arr[j];
    }
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}


console.log(`Maximum sum of a subarray of size K: ${brute_max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${brute_max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);

// Sliding window
function max_sub_array_of_size_k(k, arr) {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;

  for (window_end = 0; window_end < arr.length; window_end++) {
    windowSum += arr[window_end]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (window_end >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }
  return maxSum;
}


console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);