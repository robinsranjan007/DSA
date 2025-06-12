//find the missing number in and array

function missingnum(arr,n)
{

let s= new Set()


    
for(let x of arr)
{
   
    s.add(x)
}


for(let i=1;i<=n;i++)
    {
        
         if(!s.has(i))
    {
        return i
        
    }
    }
    return -1
    
}

console.log(missingnum([1,2,4,5],5))







//find the missing number in and array

function missingnumoptimal(arr,n)
{

let sum = (n*(n+1))/2

let s=0

for(let x of arr)
{
    s+=x
}

return sum-s


 
}

console.log(missingnumoptimal([1,2,3,4,5,6],7))





