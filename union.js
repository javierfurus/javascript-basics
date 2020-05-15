// Function to build a union
const union = (src1, src2) => {
  const out = [];
  for (const element of src1) { // Copy function without any arguments
    out.push(element);
  }
  for (let i = 0; i < src2.length; i++) {
    if (!out.includes(src2[i])) {
      out.push(src2[i]);
    }
  }
  return out;
};

console.log('Union', union([1, 2, 3, 4, 5, 6], [7, 8, 1, 2, 5]));
