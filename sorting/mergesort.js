function merge(leftarr,rightarr){
    
let i=0
let j=0
let res=[]

while(i<leftarr.length && j<rightarr.length)
{
    if(leftarr[i]<=rightarr[j])
    {
        res.push(leftarr[i])
        i++
    }
    else
    {
        res.push(rightarr[j])
        j++
    }
}

while(i<leftarr.length)
{
    res.push(leftarr[i])
        i++ 
}
while(j<rightarr.length)
{
     res.push(rightarr[j])
        j++
}

    
   return res 
}

 let mergesort=(arr)=>{
     
     if(arr.length<=1) return arr
     
     let mid = Math.floor(arr.length/2)
     
     let left = mergesort(arr.slice(0,mid))
     let right = mergesort(arr.slice(mid))
     
     return merge(left,right)
 }
 
 
 console.log(mergesort([6, 3, 9, 5, 2, 8]))
 
 
 
 
 