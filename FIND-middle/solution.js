var gimme = function (inputArray) {
  let zero = inputArray[0];
  let one = inputArray[1];
  let two = inputArray[2];
  
  if( (zero > one && one > two) || (two > one && one > zero) ) {return 1}
  else if( (zero > two && two > one) || (one > two && two > zero) ) {return 2}
  else {return 0}
};