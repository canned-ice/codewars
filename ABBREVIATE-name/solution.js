function abbrevName(name){
  let fullName = name.split(" ");
  let firstInitial = fullName[0].toUpperCase().charAt(0);
  let lastInitial = fullName[1].toUpperCase().charAt(0);
  let final = `${firstInitial}.${lastInitial}`;
  
  return final;
}