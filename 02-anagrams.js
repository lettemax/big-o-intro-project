function firstAnagram(str1, str2) {
  let str2Arr = str2.split();
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

let str1 = 'stop'
let str2 = 'tops'
let str3 = 'dinner'

console.log(firstAnagram(str1, str3));
console.log(firstAnagram(str1, str2));




function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
