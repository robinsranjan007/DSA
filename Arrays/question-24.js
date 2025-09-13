//PRINT THE MAXIMUM SUM SUBARRAY OF THE KADANES ALOGfunction kadane(arr)
{
   
  let sum=0;
  let max= -Infinity
  let start=0;
  let end=0
  let tempstart=0
  
  for(let i=0;i<arr.length;i++)
  {
      sum+=arr[i]
      if(sum>max)
      {
          max=sum
          start=tempstart
          end=i
      }
      if(sum<0)
      {
          sum=0
          tempstart=i+1
      }
  }
    return max
    
}