'use strict';

function isNice(arr) {
  console.log(arr);
  let value = false;
  if (arr.length === 0 || arr.length === 1) {
    return value;
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
        console.log('i=',i);
        console.log('i+1',arr.includes(arr[i] + 1));
        console.log('i-1',arr.includes(arr[i] - 1));
        console.log('value=',value);
        value = true;
      }
      else {
        value = false;
        console.log('else fired');

      }
    }
    return value;
  }
};