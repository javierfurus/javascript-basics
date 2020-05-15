// This is for summing the content of an array
const sumArray = (arr) => {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  return sum;
};
console.log('Sum:', sumArray([1, 2, 3, 4]));
