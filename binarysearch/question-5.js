//Floor
function floor(arr,k)
{
let low=0;
let high=arr.length-1
let ans=arr.length

while(low<=high)
{
    let mid=Math.floor((low+high)/2)
    
    if(arr[mid]>k)
    {
        
        high=mid-1
    }
    else if(arr[mid]<k)
    {
        low=mid+1
        
    }
    else
    {
        return mid
    }
}

    return high
    
}


console.log(floor([3,4,7,10,12,14,15,17],14))


//METHOD-2
function floor(arr,k)
{
let low=0;
let high=arr.length-1
let ans=-1

while(low<=high)
{
    let mid=Math.floor((low+high)/2)
    
    if(arr[mid]>k)
    {
        
        high=mid-1
    }
    else
    {
        ans=mid
        low=mid+1
        
    }
    
}

    return ans
    
}


console.log(floor([3,4,7,10,12,14,15,17],14))










