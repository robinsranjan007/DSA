//find the number that appears once and other twice

function findnumber(arr)
{
    
let m= new Map()
for(let x of arr)
{
    if(!m.has(x))
    {
        m.set(x,1)
    }
    else
    {
        m.set(x,m.get(x)+1)
    }
}

for(let [key,values] of m.entries())
{
    if(values===1)
    {
        return key
    }
}
return -1
    
}

console.log(findnumber([1,1,2,2,3,3,4,5,5]))


//optimal solution

