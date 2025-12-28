function filterArray(numbers, value) {
  const Arraybulma = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      Arraybulma.push(numbers[i]);
    }
  }
  return Arraybulma;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
