// right rotation by one

 let rightrotation=(arr)=>{

let temp=arr[arr.length-1]

for(i=arr.length-2;i>=0;i--)
{
    
    arr[i+1]=arr[i]
}
     
    arr[0]=temp 
     return arr
     
 }
 
 
 
 console.log(rightrotation([1,2,3,4,5,6,7,8]))
 
 