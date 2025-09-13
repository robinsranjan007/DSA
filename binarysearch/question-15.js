function nthroot(n,m)
{

let low=1
let high=n

while(low<=high)
{
    let mid=Math.floor((low+high)/2)
    let pow =Math.pow(mid,m)
    if(pow==n)
    {
    return mid
    }
    else if(pow<n)
    {
        low=mid+1
        
    }
    else
    {
        high=mid-1
    }
    
    
}
    
return -1
    
}
console.log(nthroot(27,3))














