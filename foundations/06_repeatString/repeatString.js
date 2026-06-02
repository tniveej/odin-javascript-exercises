const repeatString = function(string, times) {
  if (times<0) {return "ERROR"}
  else {
    let returnstring = "";
    for (let i = 0; i < times; i++) {
      returnstring += string;
    }
    return returnstring 
  }
};

// Do not edit below this line
module.exports = repeatString;
