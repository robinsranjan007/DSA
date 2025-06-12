 //remove duplicates in the sorted array
 
 let removeduplicates=(arr)=>{
     
     let i=0;
     let j=1;
     
     while(j<arr.length)
     {
         if(arr[i]!==arr[j])
         {
             i++
             [arr[i],arr[j]]=[arr[j],arr[i]]
             j++
         }
         else
         {
            j++
         }
           
     }
     return arr.slice(0,i+1)
     
 }
 
 
 //remove duplicates in the sorted array
 
 let removeduplicatesusingset=(arr)=>{
     
      let s= new Set(arr)
      return [...s]
     
 }
 

  //remove duplicates in the sorted array
 
 let removeduplicatesusingaddset=(arr)=>{
     
      let s= new Set(arr)
      
      for(let i=0;i<arr.length;i++)
      {
          s.add(arr[i])
      }
      
      return [...s]
     
 }
 
 
 console.log(removeduplicates([1,2,2,3,3,3,4,4,4]))
 
 console.log(removeduplicates([1,2,2,3,3,3,4,4,4]))


 console.log(removeduplicatesusingset([1,2,2,3,3,3,4,4,4]))