//  UNION OF TWO SORTED ARRAYS 
//USING TWO POINTER CONCEPT
//two pointer approach

function unionsorted(arr1,arr2)
{
 let i=0;
 let j=0
 let unionarr=[]
 

while(i<arr1.length && j<arr2.length)
{
     if(arr1[i]<arr2[j])
     {
         if(!unionarr.includes(arr1[i]))
         {
             unionarr.push(arr1[i])
         }
         i++
     }
    else if(arr1[i]>arr2[j])
     {
         if(!unionarr.includes(arr2[j]))
         {
             unionarr.push(arr2[j])
         }
         j++
     }
     else
     {
         if (!unionarr.includes(arr1[i])) unionarr.push(arr1[i]);
            i++;
            j++;
     }
    
    
    
}

while(i<arr1.length)
{
    if(!unionarr.includes(arr1[i])) {
        unionarr.push(arr1[i])
    }
    i++
}
while(j<arr2.length)
{
    if(!unionarr.includes(arr2[j])) {
        unionarr.push(arr2[j])
    }
    j++
}



 return unionarr
  
}

console.log(unionsorted([1,1,2,3,4,5],[0,0,2,3,4,4,5,6,6,7]))











function unionsorted(arr1,arr2)
{
    
let s = new Set([...arr1,...arr2])

return [...s]
    
}

console.log(unionsorted([1,1,2,3,4,5],[2,3,4,4,5,6,7]))



function unionsorted2(arr1,arr2)
{
 let s = new Set()
 for(let i=0;i<arr1.length;i++)
 {
     s.add(arr1[i])
 }
 
 for(let i=0;i<arr2.length;i++)
 {
     s.add(arr2[i])
     
 }

    return [...s]
}

console.log(unionsorted2([1,1,2,3,4,5],[2,3,4,4,5,6,7]))
