'use strict';

function disemvowel(str) {
  let reg = /[aeiou]/gmi;
  let newString = str.replace(reg, '');
  return newString;
}