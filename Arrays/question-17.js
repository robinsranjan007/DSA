function longestsubaary(arr, k) {
   let res=0
    let sum=0;
    
    let m= new Map()
    
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i]
        
        if(sum===k)
        {
            res=i+1
        }
        if(m.has(sum-k))
        {
        res = Math.max(res,i-m.get(sum-k))
        }
        
      // Only set if sum is not already in the map
        // because we want the **earliest index** where that sum occurred
        if (!m.has(sum)) {
            m.set(sum, i);
        }
        
        
    }
     return res
     
}

console.log(longestsubaary([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3));
