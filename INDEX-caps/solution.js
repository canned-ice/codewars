function capitalize(s,arr){
  let strArray = s.split('');
  for (let i=0; i<strArray.length; i++) {
    if(arr[i]<strArray.length)
      strArray[arr[i]] = strArray[arr[i]].toUpperCase();
  }
  return strArray.join('');
};