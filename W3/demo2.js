function secondLargest(arr) {
    if (arr.length < 2) {
      return "Array must have at least two numbers";
    }
  
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let num of arr) {
      if (num > largest) {
        secondLargest = largest; // Update second largest to current largest
        largest = num; // Update largest to new largest
      } else if (num > secondLargest && num !== largest) {
        secondLargest = num; // Update second largest if it's greater than current second largest
      }
    }
  
    return secondLargest === -Infinity
      ? "No second largest number found"
      : secondLargest;
  }
  
  // Example usage:
  const numbers = [12, 35, 1, 10, 34, 1];
  console.log(secondLargest(numbers)); // Output: 34
  