//reversing the algo by k places

function rotatekplaces(arr,k)
{
    
let i=0;
let j=k-1
while(i<j)
{
    [arr[i],arr[j]]=[arr[j],arr[i]]
    i++
    j--
}

 i=k
 j= arr.length-1
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


console.log(rotatekplaces([1,2,3,4,5,6,7,8],4))






