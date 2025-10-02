// office meetings


function maximumofficemeetings(intervals)
{

let count=0;
let lastend=-1

intervals.sort((a,b)=>a[1]-b[1])


for(let [start,end] of intervals)
{

    if(start>=lastend)
{
    count++
    lastend=end
}
        
    }

return count
}