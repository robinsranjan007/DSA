function kokobanana(arr,k)
{
//[3,4,7,9,11]  k=8
let low=1
let high=Math.max(...arr)
let res=high

while(low<=high)
{
let mid=Math.floor((low+high)/2)
let totalhour=0

for(let i=0;i<arr.length;i++)
{
    totalhour+=Math.ceil(arr[i]/mid)
}
if(totalhour<=8)
{
    res=mid
    high=mid-1
}
else
{
low=mid+1
    
}

        
}
    
    
    return res
    
    
    
}
