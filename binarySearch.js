var binarySearch = (array, elem) => {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  //console.log(start, middle, end);
  while (array[middle] !== elem && start <= end) {
    if (elem < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log(start, middle, end);
  if (array[middle] == elem) return middle;
    return -1;
};
console.log(binarySearch([2, 4, 5, 8, 10, 12, 15, 18], 10));
