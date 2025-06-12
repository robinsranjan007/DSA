//INTERSECTION OF TWO SORTED ARRAYS

function intersection(arr1,arr2)
{
    let i=0;
    let j=0;
    let inter=[]
    
    while(i<arr1.length && j<arr2.length)
    {
        if(arr1[i]<arr2[j])
        {
             
            i++
        }
        else if(arr2[j]<arr1[i])
        {
             
            j++
        }
        else
        {
            inter.push(arr1[i])
            i++
            j++
        }
    }
    return inter
}

console.log(intersection([1,2,2,3,3,4,5,6,7],[0,0,1,1,2,2,3,4,6,7,8,9,10]))



