//SQRT OF A NUMBER


function sqrt(n)
{

let low=1
let high=n
let res=-1
while(low<=high)
{
    let mid=Math.floor((low+high)/2)
    let sol=mid*mid
    if(sol<=n)
    {
        res=mid
        low=mid+1
    }
    else
    {
        high=mid-1
        
    }
    
    
}
    
return res
    
}
console.log(sqrt(27))














