function firstAnagram(str1, str2) {
  let str2Arr = str2.split("");
  for (let i = 0; i < str1.length; i++) {
    if (str2Arr.indexOf(str1[i]) > -1) {
      let index = str2Arr.indexOf(str1[i]);
      str2Arr.splice(index, 1);
    } else {
      return false;
    }
  }
  if (str2Arr.length === 0) return true;
}

function secondAnagram(str1, str2) {
  let array1 = str1.split("").sort().join();
  let array2 = str2.split("").sort().join();
  // console.log(array2);
  // console.log(array1);
  if (array1 == array2) {
    return true;
  } else {
    return false;
  }
}

let str1 = "stop";
let str2 = "tops";
let str3 = "dinner";

function thirdAnagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (obj1[str1[i]]) {
      obj1[str1[i]]++;
    } else {
      obj1[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (obj2[str2[i]]) {
      obj2[str2[i]]++;
    } else {
      obj2[str2[i]] = 1;
    }
  }

  let keys1 = Object.keys(obj1).sort();
  let keys2 = Object.keys(obj2).sort();

  if (keys1.length == keys2.length) {
    for (let i = 0; i < keys1.length; i++) {
      if (obj1[keys1[i]] == obj2[keys2[i]] && keys1[i] == keys2[i]) {
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

console.log(thirdAnagram(str1, str3));
console.log(thirdAnagram(str1, str2));

function fourthAnagram(str1, str2) {
  // Code goes here ....
}
