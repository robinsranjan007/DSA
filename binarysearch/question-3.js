//upper bound 
function upperbound(arr,k)
{
let low=0;
let high=arr.length-1
let ans=arr.length

while(low<=high)
{
    let mid=Math.floor((low+high)/2)
    
    if(arr[mid]>k)
    {
        ans=mid
        high=mid-1
    }
    else
    {
        low=mid+1
    }
}

    return ans
    
}


console.log(upperbound([3,4,7,10,12,14,15,17],14))






//method-2
function upperBound(arr, target) {
  let low = 0, high = arr.length - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  
  return low;  // upper bound index
}
