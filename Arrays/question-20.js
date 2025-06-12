  //MAJORITY ELEMENT

  //OPTIMAL SOLUTION
function majorityelement(arr) {
    let element = null;
    let count = 0;
    let n = Math.floor(arr.length / 2);

    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            element = arr[i];
            count = 1;
        } else if (arr[i] === element) {
            count++;
        } else {
            count--;
        }
    }

    // Verify candidate
    let freq = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) freq++;
    }

    return freq > n ? element : -1;
}


console.log(majorityelement([2, 2, 3, 3, 1, 2, 2])); // Output: 2 ✅


//BETTER SOLUTION


  function majorityelement(arr)
  {
    
    
    let map = new Map()
    
    let n=arr.length
    
    for(let i=0;i<arr.length;i++)
    {
        if(!map.has(arr[i]))
        {
            map.set(arr[i],1)
        }
        else
        {
            map.set(arr[i],map.get(arr[i])+1)
        }
    }
      
    for(let [key,values] of map.entries())
    {
        if(values>Math.floor(n/2))
        {
            return key
        }
    }
    
    return -1
      
  }
  
  
  console.log(majorityelement([2,2,3,3,1,2,2]))
  
  
  