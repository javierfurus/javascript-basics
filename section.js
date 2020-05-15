// This is a function to make a section
const section = (src1, src2) => {
  const out = [];
  let count = 0;
  for (let i = 0; i < src1.length; i++) {
    for (let j = 0; j < src2.length; j++) { // Here this is the function used to find if an element is in the array or not, where the arr is src2, the item looked for is src1[i];
      count++;
      if (src1[i] === src2[j] && !out.includes(src1[i])) {
        out.push(src1[i]);
        break;
      }
    }
  }
  console.log('Lépések', count);
  return out;
};
console.log('Section', section([1, 2, 3, 4, 5, 6, 1], [7, 8, 1, 2, 5]));
