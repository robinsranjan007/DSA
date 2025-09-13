//  UNION OF TWO SORTED ARRAYS 
//USING TWO POINTER CONCEPT
//two pointer approach

 function unionsortedarrays(arr1,arr2)
 {
    let arr=[]
    
    let i=0;
    let j=0
    
    while(i<arr1.length && j<arr2.length)
    {
        
        if(arr1[i]<arr2[j] )
        {
            if(arr.length===0 || arr[arr.length-1]!=arr1[i])
            {
            arr.push(arr1[i])
            }
            i++
        }
        else if(arr1[i]>arr2[j]  )
        {
            if(arr.length===0 ||arr[arr.length-1]!==arr2[j])
            {
              arr.push(arr2[j])
            }
            j++
        }
        else
        {
            if(arr.length ===0 || arr[arr.length-1]!==arr1[i])
            {
                arr.push(arr1[i])
            }
            i++
            j++
        }
    }
    
    while(i<arr1.length)
    {
        if(arr.length===0 || arr[arr.length-1]!=arr1[i])
            {
            arr.push(arr1[i])
            }
            i++
    }
    while(j<arr2.length)
    {
        if(arr.length===0 || arr[arr.length-1]!=arr2[j])
            {
            arr.push(arr2[j])
            }
            j++
    }
     
     return arr
     
 }
 
 
 console.log(unionsortedarrays([1,1,2,3,4,5],[2,3,4,4,5]))
 
 

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
