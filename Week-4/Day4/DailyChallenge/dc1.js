function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every(word => typeof word === 'string')) {
      resolve(words.map(word => word.toUpperCase()));
    } else {
      reject("Not all elements are strings.");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject("Array length is not greater than 4.");
    }
  });
}

// Test cases
makeAllCaps([1, "pear", "banana"])
  .then(sortWords)
  .then(console.log)
  .catch(console.log);

makeAllCaps(["apple", "pear", "banana"])
  .then(sortWords)
  .then(console.log)
  .catch(console.log);

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(sortWords)
  .then(console.log)
  .catch(console.log);
