/**
 * Solution:
 * This problem follows the Two Pointers pattern and is quite similar to Triplet Sum to Zero. We can follow a similar approach
 * to iterate through the array, taking one number at a time. At every step, we will save the difference between the triplet
 * and the target number, so that in the end, we can return the triplet with the closest sum.
 *
 * Time complexity
 * Sorting the array will take O(N* logN). Overall, the function will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).
 *
 * Space complexity
 * The above algorithm’s space complexity will be O(N), which is required for sorting.
 */

function triplet_sum_close_to_target(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let smallest_difference = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const target_diff = targetSum - arr[i] - arr[left] - arr[right];
      if (target_diff === 0) {
        // we've found a triplet with an exact sum
        return targetSum; // return sum of all the numbers
      }

      // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
      if (
        Math.abs(target_diff) < Math.abs(smallest_difference) ||
        (Math.abs(target_diff) === Math.abs(smallest_difference) &&
          target_diff > smallest_difference)
      ) {
        smallest_difference = target_diff; // save the closest and the biggest difference
      }

      if (target_diff > 0) {
        left += 1; // we need a triplet with a bigger sum
      } else {
        right -= 1; // we need a triplet with a smaller sum
      }
    }
  }
  return targetSum - smallest_difference;
}

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));
