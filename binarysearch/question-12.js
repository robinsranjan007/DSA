//Single element in sorted array
function singlelement(arr)
{
  
  let low=1
  let high=arr.length-2
  
  if(arr.length==1)return arr[0]
  if(arr[0]!==arr[1]) return arr[0]
  if(arr[arr.length-1]!==arr[arr.length-2]) return arr[arr.length-1]
  
  while(low<=high)
    {
        let mid= Math.floor((low+high)/2)
        
        if(arr[mid]!=arr[mid-1] && arr[mid]!=arr[mid+1])
        {
            return arr[mid]
        }
        else if(mid%2==1 && arr[mid-1] ==arr[mid] || mid%2==0 && arr[mid]==arr[mid+1])
        {
            low=mid+1
        }
        else
        {
            //the ekement is on the left so element the right
            high=mid-1
        }
    }
    
return -1    
}

console.log(singlelement([1,1,2,2,3,3,4,5,5,6,6]))













