 // SMALLEST DIVISOR LESS THAN A THRESHOLD



 function check(arr,k,mid)
 {
     
 let sum=0;
 for(let i=0;i<arr.length;i++)
 {
     
 sum+=Math.ceil((arr[i]/mid))
     
 }
     
     
     return sum<=k
     
     
     
 }
 
 
 function smallestdivisor(arr,k)
 {

let low=1
let high=Math.max(...arr)
let res=-1

while(low<=high)
{

let mid=Math.floor((low+high)/2)

if(check(arr,k,mid))
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
 
 
 
 
 
 
 
 
 