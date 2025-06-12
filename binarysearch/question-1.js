//BINARY SEARCH

function binarysearch(arr,k)
{
    let low=0;
    let high=arr.length-1
    
    while(low<=high)
    {
        let mid=Math.floor((low+high)/2)
        if(arr[mid]<k)
        {
            low=mid+1
        }
        else if(arr[mid]>k)
        {
            high=mid-1
        }
        else
        {
            return mid
        }
    }
    return -1
}