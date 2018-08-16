function insertDash(num) {
  let numString = num.toString();
  let dashedString = '';
  for (let i=0; i < numString.length; i++) {
    if (numString[i] %2 !== 0 &&
        numString[i+1] %2 !== 0 &&
        i+1 < numString.length) {
          dashedString += numString[i] + '-';
    } else {
      dashedString += numString[i];
    }
  }
  return dashedString;
};

Test.assertEquals(insertDash(454793),'4547-9-3');
Test.assertEquals(insertDash(123456),'123456');
Test.assertEquals(insertDash(1003567),'1003-567');