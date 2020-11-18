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

// console.log(badTwoSum([1, 5, 6, 9], 99));
// console.log(badTwoSum([1, 5, 6, 9], 14));

function okayTwoSum1(arr, targetSum) {
  if (arr.length <= 1) {
    return false;
  }

  let sorted = arr.sort();
  let pivot = Math.floor(arr.length / 2);
  let sum = sorted[pivot] + sorted[pivot + 1];
  if (sum < targetSum) {
    let remaining = sorted.slice(pivot + 1);
    return okayTwoSum1(remaining, targetSum);
  } else if (sum > targetSum) {
    let remaining = sorted.slice(0, pivot + 1);
    return okayTwoSum1(remaining, targetSum);
  } else {
    return true;
  }
}

console.log(okayTwoSum1([1, 5, 6, 9, 2, 6, 7], 91));
console.log(okayTwoSum1([1, 5, 6, 9, 2, 6, 7], 97));

function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}

function twoSum(arr, targetSum) {
  // Code goes here ...
}

function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
