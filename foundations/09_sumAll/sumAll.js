const sumAll = function(int1,int2) {
  if ( int1 * int2 < 0 || !Number.isInteger(int1) || !Number.isInteger(int2)) {
    return "ERROR"
  }
  const intSmall = int1 < int2 ? int1 : int2;
  const intLarge = int1 > int2 ? int1 : int2; 

  let sum = 0
  for (let i = intSmall; i <= intLarge ; i++){ 
    sum += i ;
  }
  return sum
};

// Do not edit below this line
module.exports = sumAll;
