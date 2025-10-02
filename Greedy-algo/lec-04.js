function maxjump(arr)
{
    
    let jmax=0
    
    for(let i=0;i<arr.length-1;i++)
    {
        if(i>jmax) return false
        jmax=Math.max(jmax,(i+arr[i]))
    }
    
    
    return true
    
}

console.log(maxjump([1,2,4,1,1,0,2,5]))