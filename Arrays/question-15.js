//maximum consecutive ones

function consecutiveone(arr)
{
  
  let count=0
  let res=0;
  
  for(let i=0;i<arr.length;i++)
  {
      if(arr[i]===1)
      {
          count++
          res=Math.max(count,res)
          
      }
      else
      {
          count=0
      }
  }
  
    return res
    
}


console.log(consecutiveone([1,1,0,1,1,1,2,3,1,1,1,1,0,1,1,1]))
