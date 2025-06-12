function secondsmallest(arr)
{
     let smallest =arr[0]
     let second = Infinity
     
     for(let i=0;i<arr.length;i++)
     {
         if(arr[i]<smallest)
         {
             second=smallest
             smallest= arr[i]
         }
         else if(arr[i]<second && arr[i]>smallest)
         {
             second=arr[i]
         }
     }
     return second === Infinity ? null : second;
}



console.log(secondsmallest([45,34,32,12,67]))















