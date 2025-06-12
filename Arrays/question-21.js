//SUM OF THE MAXIMUM SUBARRAY

//KADANES ALGORITHM

function maximumsubarray(arr) {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    
    if (sum > max) {
      max = sum;
    }


    if (sum < 0) {
      sum = 0;
    }


  }

  return max;
}
