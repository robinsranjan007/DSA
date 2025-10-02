//NON OVERLAPPING INTERVALS


function Nintervals(intervals)
{

    intervals.sort((a,b)=>a[1]-b[1])

    let count=0;

    let prvend=-1

    for(let [start,end] of intervals)
    {

if(start>=prvend)
{
    count++
    prvend=end
}


    }

return intervals.length-count


}