function find_average(array) {
  let reducer = (acc, curr) => acc + curr;
  let avg = array.reduce(reducer)/array.length;
  return avg;
}