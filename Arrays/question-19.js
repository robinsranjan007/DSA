//sort o,1,2

function dutchalgo(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      mid++;
      low++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];

      high--;
    } else {
      mid++;
    }
  }

  return arr;
}

console.log(dutchalgo([0, 1, 2, 0, 1, 2, 1, 2, 0, 0]));
