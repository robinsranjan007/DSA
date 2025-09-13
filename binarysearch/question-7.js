//search in rotated and sorted array
function sortedrotated(arr,k)
{
    let low=0;
    let high= arr.length-1
    
    while(low<=high)
    {
        let mid=Math.floor((low+high)/2)
        if(arr[mid]===k)return mid
        //left
        if(arr[low]<=arr[mid])
        {
            if(arr[low]<=k && k<arr[mid])
            {
                high=mid-1
            }
            else
            {
                low=mid+1
            }
        }
        //right sorted
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