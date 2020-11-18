function badTwoSum(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        return true;
      } 
    }
  }
  return false;
}

console.log(badTwoSum([1, 5, 6, 9], 99));
console.log(badTwoSum([1, 5, 6, 9], 14));




function okayTwoSum1(arr, targetSum) {
  let sorted = arr.sort();
  let pivot = Math.floor(arr.length / 2);
  if (sorted.slice())
}


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
