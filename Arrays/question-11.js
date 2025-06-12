//linear search
function linearsearch(arr,k)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===k)
        {
            return i
        }
    }
    
    return -1
}

console.log(linearsearch([12,32,43,56,78],32))