 let largest=(arr)=>{

let res= arr[0]

for(let x of arr)
{
    if(x>res)
    {
        res=x
    }
}

return res

}




function maximum(arr)
{
    let res= arr[0]
    
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>res)
        {
            res=arr[i]
        }
    }


    return res
}


function largesNumber(arr){
    return Math.max(...arr)//it expects an individual number Math.max so we split the container array
}

console.log(largest([12,45,32,56,2]))
console.log(maximum([12,45,32,56,2]))
console.log(largesNumber([12,45,32,56,2]))