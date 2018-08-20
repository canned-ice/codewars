function capitalize(s){
  let even = [];
  let odd = [];
  let letter = '';
  let result = [];
  s = s.toLowerCase();
  s = s.split(''); // split string into array of letters
    for (let i=0; i < s.length; i++) { // for every letter in string/array
      if (i % 2) { // if modulo returns 2 this number is odd and
        letter = s[i];
        even.push(letter);
        letter = letter.toUpperCase();
        odd.push(letter);
      } else { // if modulo doesn't return anything and this number is even
        letter = s[i];
        odd.push(letter);
        letter = letter.toUpperCase();
        even.push(letter);
      }
    }
  odd = odd.join('');
  even = even.join('');
  return [even, odd];
};