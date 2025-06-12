//merge intervals

//OPTIMAL

let mergeintervals=(arr)=>{

arr.sort((a,b)=>a[0]-b[0])

let res=[arr[0]]

for(let i=1;i<arr.length;i++)
{

    let last =res[res.length-1]
    let current=arr[i]

    if(last[1]>=current[0])
    {
        last[1]=Math.max(last[1],current[1])
    }
    else
    {
        res.push(current)
    }


}

return res
}
