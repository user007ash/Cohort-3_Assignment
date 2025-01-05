/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {  
  let largeElem=numbers[0]; 
  for (let i in numbers) {
    if (numbers[i]>largeElem) {
      largeElem = numbers[i];
    }
  }
  return largeElem;
}

findLargestElement([3, 7, 2, 9, 1])


module.exports = findLargestElement;