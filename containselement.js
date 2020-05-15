// Check if an array contains an element or not
const containsElement = (arr, element) => {
  let i = 0;
  while (i < arr.length && arr[i] !== element) {
    i++;
  }
  // return i < arr.length;
  if (i < arr.length) {
    return true;
  } else {
    return false;
  }
};

console.log('Eldöntés', containsElement([1, 2, 3], 3));
