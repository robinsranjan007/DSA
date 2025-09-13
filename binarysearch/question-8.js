// search in sorted and rotated arrays with duplicate

function sortedrotatedduplicate(arr,k)
{
    let low=0;
    let high=arr.length-1
    

while(low<=high)
{
    let mid = Math.floor((low+high)/2)
    
    if(arr[mid]===k) return mid
    if(arr[low]===arr[mid] && arr[mid]===arr[high])
    {
        low=low+1
        high=high-1
        continue
    }
    
    if(arr[mid]>=arr[low])
    {
        if(arr[low] <= k && k < arr[mid])
        {
            high= mid-1
        }
        else
        {
            low=mid+1
        }
    }
    else
    {
        if(arr[mid]<k && k<=arr[high])
        {
            low=mid+1
        }
        else
        {
            high=mid-1
        }
        
    }
    
}



    
    
    
    return -1
    
    
}