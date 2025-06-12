function smallest(arr)
{
    let res = arr[0]
    for(let x of arr)
    {
        if (x<res)
        {
            res=x
        }
        
    }
    
    return res
    
}

console.log(smallest([45,34,32,12,67]))















