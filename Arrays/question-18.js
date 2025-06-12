//TWO SUM PROBLEM


//TWO SUM PROBLEM

function twosum(arr,k)
{
    
    arr.sort((a,b)=>a-b)


let i=0;
let j=arr.length-1

while(i<j)
{
    let sum=arr[i]+arr[j]
    if(sum>k)
    {
        j--
    }
    else if(sum<k)
    {
        i++
    }
    else
    {
      return  true
    }
}
 
    
    
    return false
    
}


console.log(twosum([2,6,5,8,11],14))




//TWO SUM PROBLEM
//BETTER


function twosum(arr,k)
{
    
    
    let map = new Map()
    
    for(let i=0;i<arr.length;i++)
    {
        
        if(map.has(k-arr[i]))
        {
            return true
        }
         
        
            map.set(arr[i],i)
        
        
    }
    
    return false
 
    
    
    
    
}


console.log(twosum([2,6,5,8,11],14))




//TWO SUM PROBLEM
//BRUTE SOLUTION
function twosum(arr,k)
{
    
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        let sum=arr[i] +arr[j]
        if(sum===k)
        {
            return true
        }
    }
}
    
    
    return false
    
}


console.log(twosum([2,6,5,8,11],14))