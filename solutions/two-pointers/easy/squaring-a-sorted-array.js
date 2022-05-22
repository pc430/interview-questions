/**
 * This is a straightforward question. The only trick is that we can have negative numbers in the input array, 
 * which will make it a bit difficult to generate the output array with squares in sorted order.
 * 
 * An easier approach could be to first find the index of the first non-negative number in the array. 
 * After that, we can use Two Pointers to iterate the array. One pointer will move forward to iterate the non-negative numbers, 
 * and the other pointer will move backward to iterate the negative numbers. At any step, whichever number gives us a bigger 
 * square will be added to the output array.
 * [-2][-1][0][2][3]
 *    <- ^  ^ ->
 * 
 * Since the numbers at both ends can give us the largest square, an alternate approach could be to use two pointers starting at 
 * both ends of the input array. At any step, whichever pointer gives us the bigger square, we add it to the result array and move
 *  to the next/previous number according to the pointer.
 * [-2][-1][0][2][3]
 *   ^ ->      <- ^
 * 
 * Time complexity
 * The above algorithm’s time complexity will be O(N) as we are iterating the input array only once.
 * 
 * Space complexity
 * The above algorithm’s space complexity will also be O(N); this space will be used for the output array.
 */

 function make_squares(arr) {
  const n = arr.length;
  squares = Array(n).fill(0);
  let highestSquareIdx = n - 1;
  let left = 0,
    right = n - 1;
  while (left <= right) {
    let leftSquare = arr[left] * arr[left],
      rightSquare = arr[right] * arr[right];
    if (leftSquare > rightSquare) {
      squares[highestSquareIdx] = leftSquare;
      left += 1;
    } else {
      squares[highestSquareIdx] = rightSquare;
      right -= 1;
    }
    highestSquareIdx -= 1;
  }

  return squares;
}


console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);