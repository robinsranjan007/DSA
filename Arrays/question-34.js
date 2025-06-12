//missing optimal solution

var findErrorNums = function(arr) {

let n=arr.length
let Sn= (n*(n+1))/2  
let Sn2=((n)*(n+1)*(2*n+1))/6

let An=0
let An2=0

for(let i=0;i<arr.length;i++)
{
An+=arr[i]
}
for(let i=0;i<arr.length;i++)
{
    An2+=arr[i]*arr[i]
}

let diff1=Sn-An
let diff2=Sn2-An2

let sumxy=diff2/diff1



let missing =  (diff1+sumxy)/2
let repeating = missing-diff1
return [repeating,missing]





};





//repeating and missing
let repeatingandmissing=(arr)=>{
    
    let m = new Map()
    let repeating 
    let missing 
    
    for(let i=0;i<arr.length;i++)
    {
        m.set(arr[i],(m.get(arr[i])||0)+1)
    }
    
    for(let i=1;i<=arr.length;i++)
    {
        if(!m.get(i))
        {
            missing= i
            
        }
        else if(m.get(i)>1)
        {
            repeating = i
        }
    }
    return [missing ,repeating]
}


console.log(repeatingandmissing([1,1,2,3,4,5]))


///