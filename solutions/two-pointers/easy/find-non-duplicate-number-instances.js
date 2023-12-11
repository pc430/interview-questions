/**
 * In this problem, we need to separate the duplicates in-place such that the resultant 
 * length of the array remains sorted. As the input array is sorted, therefore, one way to do 
 * this is to shift the elements left whenever we encounter duplicates. In other words, we will 
 * keep one pointer for iterating the array and one pointer for placing the next non-duplicate 
 * number. So our algorithm will be to iterate the array and whenever we see a non-duplicate 
 * number we move it next to the last non-duplicate number we’ve seen.
 * 
 * We know that the array is sorted, meaning that duplicate numbers will be situated in consecutive
 * order. We will use two pointers, one iterating through the array and the other keeping place of
 * the index that the next non duplicate number will be placed.
 * 
 * Time Complexity
 * O(N) - Where 'N' is the total number of elements in the array
 * 
 * Space Complexity
 * O(1) - Constant space
 */

const find_non_duplicate_number_instances = function (arr) {
    const i = 0;
    const nextNonDuplicate = 1;

    while (i < arr.length) {
        if (arr[nextNonDuplicate - 1] !== arr[i]) {
            arr[nextNonDuplicate] = arr[i];
            nextNonDuplicate += 1;
        }
        i += 1;
    }

    return nextNonDuplicate;
}