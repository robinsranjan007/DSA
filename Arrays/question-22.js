//REARRANGE POSITIVE AND NEGATIVE
//BRUTE FORCE
 function rearrange(arr)
 {
     
    let positive =[]
    
    let negative =[]
    
    let res=[]
    
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positive.push(arr[i]);
    } else {
      negative.push(arr[i]);
    }
  }
     
i=0;
let j=0;

while(i<positive.length && j<negative.length)
{
    
res.push(positive[i])
res.push(negative[j])

    i++
    j++
}

while(i<positive.length)
{
    res.push(positive[i])
    i++
}
while(j<negative.length)
{
    res.push(negative[j])
    j++
}
     
    return res 
 }
 
 console.log(rearrange([3,1,-2,-5,2,-4]))
 
 
 