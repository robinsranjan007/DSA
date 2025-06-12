

function rotaterightk(arr,k)
{
    //1,2,3,4,5,6,7,8,9
let i=arr.length-k 
let j=arr.length-1
    
while(i<j)
{
    [arr[i],arr[j]]=[arr[j],arr[i]]
    i++
    j--
}


i=0;
j=arr.length-k-1
while(i<j)
{
    [arr[i],arr[j]]=[arr[j],arr[i]]
    i++
    j--
}

i=0;
j=arr.length-1
while(i<j)
{
    [arr[i],arr[j]]=[arr[j],arr[i]]
    i++
    j--
}


return arr
    
}


console.log(rotaterightk([1,2,3,4,5,6,7,8,9],3))




