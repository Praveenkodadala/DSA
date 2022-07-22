//linear search

let array = [6, 7, 12, 5, 8, 12];

function linearSearch(array, num) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === num)  return i;
  }
  return -1;
}

console.log(linearSearch(array, 8));
