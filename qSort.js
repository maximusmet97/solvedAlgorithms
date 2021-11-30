const qSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const left = arr.filter(
    (element, index) => element <= pivot && index !== pivotIndex
  );
  const right = arr.filter((element) => element > pivot);
  return qSort(left).concat(pivot, qSort(right));
};

//Example
console.log(qSort([3, 4, 1, 7, 22, 6, 3, 1, 77, 77, 2, 0]));
