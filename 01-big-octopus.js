function quadraticBiggestFish(fishes) {
  let currentBiggest;
  for (let i = 0; i < fishes.length; i++) {
    for (let j = i + 1; j < fishes.length; j++) {
      if (fishes[i].length < fishes[j].length) {
        currentBiggest = fishes[j];
      }
    }
  }
  return currentBiggest;
}

const fishies = [
  "fish",
  "fiiish",
  "fiiiiish",
  "fiiiish",
  "fiiiissshhhhhh",
  "fffish",
  "ffiiiiisshh",
  "fsh",
];

function nlognBiggestFish(fishes) {
  fishes.sort(function (fish1, fish2) {
    return fish1.length - fish2.length;
  });
  return fishes[fishes.length - 1];
}

function linearBiggestFish(fishes) {
  let biggest = fishes[0];

  for (let i = 1; i < fishes.length; i++) {
    if (fishes[i].length > biggest.length) {
      biggest = fishes[i];
    }
  }
  return biggest;
}

// console.log(linearBiggestFish(fishies));

tilesArray = [
  "up",
  "right-up",
  "right",
  "right-down",
  "down",
  "left-down",
  "left",
  "left-up",
];

direction = "up";

function slowDance(direction, tilesArray) {
  for (let i = 0; i < tilesArray.length; i++) {
    if (tilesArray[i] === direction) {
      return i;
    }
  }
}

// console.log(slowDance("down", tilesArray));

tilesObj = {
  up: 0,
  "right-up": 1,
  right: 2,
  "right-down": 3,
  down: 4,
  "left-down": 5,
  left: 6,
  "left-up": 7,
};
function fastDance(direction, tilesObj) {
  return tilesObj[direction];
}

console.log(fastDance("left", tilesObj));
