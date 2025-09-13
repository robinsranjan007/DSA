//LOWER BOUND

function lowerbound(arr,k)
{
let low=0;
let high=arr.length-1
let ans=-1

while(low<=high)
{
    let mid=Math.floor((low+high)/2)
    
    if(arr[mid]>=k)
    {
        ans=arr[mid]
        high=mid-1
    }
    else
    {
        low=mid+1
    }
}

    return ans
    
}


console.log(lowerbound([3,4,7,10,12,14,15,17],13))

//METHOD TWO


function lowerBound(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;  // lower bound index
}







