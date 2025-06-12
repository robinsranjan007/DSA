//merge sorted arrays without extra space

function mergesortedarrays(arr1,arr2)
{
 
 let i=arr1.length-1
 let j=0
 
 while(i>=0 && j<arr2.length)
 {
    if(arr1[i]>arr2[j])
    {
        [arr1[i],arr2[j]]=[arr2[j],arr1[i]]
        i--
        j++
    }
    else
    {
        break
    }
     
 }
 arr1.sort((a,b)=>(a-b))
 arr2.sort((a,b)=>(a-b))
 
 return [[arr1],[arr2]]
 
}

console.log(mergesortedarrays([1,3,5,7],[0,2,4,6,8]))






//variant two


