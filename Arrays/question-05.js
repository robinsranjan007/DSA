 let checksort=(arr)=>{
     
    
for(let i=1;i<arr.length;i++)
{
    if(arr[i-1]>arr[i])
    {
        return false
    }
}

return true
    
 }
 
 
 console.log(checksort([1,2,3,4,5,6,7,8,3]))