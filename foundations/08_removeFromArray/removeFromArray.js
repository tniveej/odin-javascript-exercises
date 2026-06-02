const removeFromArray = function(array, ...items) {
  for (const item of items) {
    if (array.includes(item)){
      array = array.filter( (rest) => rest !== item);
    } else {
      continue;
    }
  }
  return array

};

// Do not edit below this line
module.exports = removeFromArray;
