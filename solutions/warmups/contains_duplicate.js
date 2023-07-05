/**
 * Approach 1: Brute Force
 *
 * We can use a brute force approach and compare each element with all other elements in the array.
 * If any two elements are the saem, we'll return true. If we've gone through the entire array and
 * haven't found any duplicates, we'll return false.
 *
 * Time complexity:
 * The algorithm takes O(N^2) where N is the number of elements in the input array. This is because
 * we need to compare each element with all other elements, which takes O(N^2) time.
 *
 * Space Complexity:
 * The algorithm takes O(1), because we only need a few variables to store the indices, which take constant space.
 */

const contains_duplicate_brute_force = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

const nums1 = [1, 2, 3, 4];
console.log(contains_duplicate_brute_force(nums1)); // Expected output: false

const nums2 = [1, 2, 3, 1];
console.log(contains_duplicate_brute_force(nums2)); // Expected output: true

const nums3 = [];
console.log(contains_duplicate_brute_force(nums3)); // Expected output: false

const nums4 = [1, 1, 1, 1];
console.log(contains_duplicate_brute_force(nums4)); // Expected output: true

/**
 * Approach 2: Using Hash Set
 *
 * We can use the set data structure to check for duplicates in an array.
 *
 * Since a set can only hold unique elements, we can check if the elements in the
 * given array are present more than once by adding them to a set. This way, we can
 * determine if there are any duplicates in the array.
 *
 * This approach works as follows:
 *   1. A set named unique_set is created to store unique elements.
 *   2. The algorithm then iterates through the input array nums.
 *   3. For each element "x" in the array, the algorithm checks if "x" is already in the
 *      unique_set.
 *     - If "x" is in the unique set, then the algorithm returns true, indicating that a
 *       duplicate has been found.
 *     - If "x" is not in the unique_set, then the algorithm adds "x" to the unique_set.
 *   4. The iteration continues until all elements in the array have been processed.
 *   5. If no duplicates are found, the algorithm returns false.
 *
 * The approach utilizes the property of sets to store only unique elments, making it an
 * efficient solution for finding duplicates in an array.
 *
 * Time complexity:
 * The algorithm takes O(N) where N is the number of elements in the input array.
 *
 * Space complexity:
 * The algorithm takes O(N), as it stores the numbers in a set.
 */

const contains_duplicate_set = function (nums) {
  const unique_set = new Set(); // Use Set to store unique elements
  for (let i = 0; i < nums.length; i++) {
    // If the set already contains the current element, return true
    if (unique_set.has(nums[i])) {
      return true;
    }
    unique_set.add(nums[i]); // Add the current element to the set
  }
  return false; // Return false if no duplicates found
};

console.log(contains_duplicate_set(nums5)); // Expected output: false

console.log(contains_duplicate_set(nums6)); // Expected output: true

console.log(contains_duplicate_set(nums7)); // Expected output: false

console.log(contains_duplicate_set(nums8)); // Expected output: true

/**
 * Approach 3: Sorting
 *
 * Another approach is to sort the array first and then check for duplicates.
 *
 * We'll sort the array and then iterate through it, comparing each element with the next one.
 *
 * If any two elements are the same, we'll return true, If we've gone through the entiere
 * array and haven't found any duplicates, we'll return false.
 *
 * Time complexity:
 * O(N * logN), where N is the number of elements in the array nums. This is because sorting the
 * array takes O(N * logN) time.
 *
 * Space complexity:
 * O(1) or O(n), depending on the sorting algorithm used. If an in-place sorting algorithim is ued,
 * the space complexity will be O(1). If a sorting algorithm that creates a new array is used, the
 * space complexity will be O(N), where N is the number of elements in the array nums;
 */

const contains_duplicate_sorting = function (nums) {
  nums.sort((a, b) => a - b); // sort the array
  // use a loop to compare each element with its next element
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) { // if any two elments are same, return true
      return true;
    }
  }
  return false; // if no duplicates are found, return false
};

console.log(contains_duplicate_sorting(nums5)); // Expected output: false

console.log(contains_duplicate_sorting(nums6)); // Expected output: true

console.log(contains_duplicate_sorting(nums7)); // Expected output: false

console.log(contains_duplicate_sorting(nums8)); // Expected output: true