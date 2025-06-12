function longestsubaary(arr, k) {
  let maxlength = 0;
  let sum = 0;

  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) {
      maxlength = i + 1;
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
    if (map.has(sum - k)) {
      let length = i - map.get(sum - k);
      maxlength = Math.max(maxlength, length);
    }
  }

  return maxlength;
}

console.log(longestsubaary([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3));
