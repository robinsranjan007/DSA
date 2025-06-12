function secondlargest(arr)
{
    
    let lar=arr[0]
    let slar=-Infinity
    
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>lar)
        {
            slar=lar
            lar=arr[i]
        }
        else if(arr[i]<lar && arr[i]>slar)
        {
            slar=arr[i]
        }
        else
        {
            continue
        }
    }
    
    return slar
}



console.log(secondlargest([23,45,65,76,88]))