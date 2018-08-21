function validatePIN (pin) {
  let regex = /^\d{4}$|^\d{6}$/gm
  pin = pin.toString();
  let pinCheck = pin.match(regex);
  if (pinCheck == null) {
    return false;
  } else {
    return true;
  }
}