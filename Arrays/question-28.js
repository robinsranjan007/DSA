//BRUTE FORCE
function majorityelementthree(arr) {
    let n = arr.length;
    let count1 = 0, count2 = 0;
    let element1 = null, element2 = null;

    for (let x of arr) {
        if (x === element1) {
            count1++;
        } else if (x === element2) {
            count2++;
        } else if (count1 === 0) {
            element1 = x;
            count1 = 1;
        } else if (count2 === 0) {
            element2 = x;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Verify actual counts
    count1 = 0;
    count2 = 0;
    for (let x of arr) {
        if (x === element1) count1++;
        else if (x === element2) count2++;
    }

    const result = [];
    if (count1 > Math.floor(n / 3)) result.push(element1);
    if (count2 > Math.floor(n / 3)) result.push(element2);

    return result.length > 0 ? result : -1;
}






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


