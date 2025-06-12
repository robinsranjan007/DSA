//leaders in an array

function arrayleaders(arr)
{
   
  
 let leader=[]
 let max= -Infinity
 
 for(let i=arr.length-1;i>=0;i--)
 {
      if(arr[i]>max)
      {
          max=arr[i]
          leader.push(arr[i])
      }
      
 }
    return leader.reverse()
    
}

console.log(arrayleaders([2,5,70,1,3,7]))