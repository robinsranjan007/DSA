//minimum in sorted and rotated arrays unique elements

function minimusorted(arr)
{
    
let res= Infinity

let low=0;
let high=arr.length-1

while(low<=high)
{

let mid=Math.floor((low+high)/2)


if(arr[low]<=arr[mid])
{
    res=Math.min(res,arr[low])
    low=mid+1
}
else
{
    res=Math.min(res,arr[mid])
    high=mid-1
}



    
}
    

return res
    
}











