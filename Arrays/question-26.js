//LONGEST SUBSEQUENCE

function longestsubsequence(arr)
{
   
   let s = new Set(arr)

   let res= 1
for(let i=0;i<arr.length;i++)
{

if(!s.has(arr[i]-1))
{

    let current=arr[i]
    let count=0

    while(s.has(current))
    {
        count++
current++

    }

    res= Math.max(res,count)


}

}


return res
}

console.log(longestsubsequence([102,4,100,1,101,3,2,1,1]))