//THREE SUM PROBLEMS 


function optimalthreesum(arr)
{

    let res= []

    for(let i=0;i<arr.length;i++)
    {

        if(i>0 && arr[i]===arr[i-1]) continue

        let j=i+1
        let k= arr.length-1
        while(j<k)
        {
            let sum= arr[i]+arr[j]+arr[k]
            if(sum>0)
            {
                k--
            }
            else if(sum<0)
            {
                j++
            }
            else
            {
                res.push([arr[i],arr[j],arr[k]])
                    j++
                    k--
                    while(j<k&& arr[j]===arr[j-1])j++
                    while( j <k &&arr[k]===arr[k+1])k--
                
            }
        }

    
    }

return res
}




//BETTER SOLUTION

function threesum(arr){
     
let res= new Set()

for(let i=0;i<arr.length;i++)
{
        let s = new Set()
    for(let j=i+1;j<arr.length;j++)
    {  
        let k= -(arr[i]+arr[j])
        if(s.has(k))
        {
                let temparr=[arr[i],arr[j],k].sort((a,b)=>a-b)
                res.add(JSON.stringify(temparr))       
        }
        s.add(arr[j])
        
    }
}
    
    
    return [...res].map((val)=>JSON.parse(val))
}

console.log(threesum([-1,0,1,2,-1,-4]))










// BRUTE FORCE








function threesum(arr)
{

    let set = new Set()


    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            for(let k=j+1;k<arr.length;k++)
            {
                if(arr[i]+arr[j]+arr[k]===0)
                {
                    let temparr=[arr[i],arr[j],arr[k]]  //[1,1,-2]
                    temparr.sort((a,b)=>a-b) // [-2,1,1]
                    
                    set.add(JSON.stringify(temparr))
                }
            }
        }
    }

    return [...set].map((val)=>JSON.parse(val))
}


console.log(threesum([-1,0,1,2,-1,-4]))