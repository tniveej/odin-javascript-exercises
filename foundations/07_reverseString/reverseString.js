const reverseString = function(string) {
  let string_array = [...string]
  let reversed_array = []
  for (let i=string_array.length-1; i>=0;i--) {
    reversed_array.push(string_array[i])
  }
  return reversed_array.join('')
};

// Do not edit below this line
module.exports = reverseString;
