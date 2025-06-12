//BRUTE FORCE
function majorityelementII(arr)
{
 
 let element1
 let element2
 let count1=0
 let count2=0
 let n= Math.floor(arr.length/3)
 for(let i=0;i<arr.length;i++)
 {
     if(count1===0 && arr[i]!=element2)
     {
         element1=arr[i]
         count1=1
     }
     else if(count2===0 && arr[i]!=element1)
     {
         element2=arr[i]
         count2=1
     }
     else if(arr[i]===element1)
     {
         count1++
     }
     else if(arr[i]===element2)
     {
         count2++
     }
     else
     {
         count1--
         count2--
         
     }
 }
 
  count1=0
  count2=0
 
 for(let x of arr)
 {
     if(x ===element1)
     {
         count1++
     }
      if(x===element2)
     {
         count2++
     }
 }
 
 let res=[]
if(count1>n) res.push(element1)
if(count2>n) res.push(element2)
  
  return res
 
}
 
 console.log(majorityelementII([2, 2, 3, 3, 1, 2, 2]))
 





//BETTER SOLUTION

function majorityelement2(arr)
{
    
    let map= new Map()
    let n= Math.floor(arr.length/3)
    for(let i=0;i<arr.length;i++)
    {
        
        map.set(arr[i],(map.get(arr[i])||0)+1)
        
    }
    
    let res=[]
    
    for(let [keys,values] of map.entries())
    {
        if(values>n)
        {
            res.push(keys)
        }
    }
    
    
    return res
    
    
}

console.log(majorityelement2([1,1,1,3,3,2,2,2]))


