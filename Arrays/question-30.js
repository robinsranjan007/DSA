function foursum(arr,tar){

let res=[]
 
 for(let i=0;i<arr.length;i++)
 {
     if(i>0&& arr[i]===arr[i-1])continue
     for(let j=i+1;j<arr.length;j++)
     {
     if(j>i+1&& arr[j]===arr[j-1])continue
         
         let k=j+1
         let l= arr.length-1
         while(k<l)
         {
         let sum=arr[i]+arr[j]+arr[k]+arr[l]
             if(sum<tar)
             {
                 k++
             }
             else if(sum>tar)
             {
                 l--
             }
             else
             {
                  res.push([arr[i],arr[j],arr[k],arr[l]])
                  k++
                  l--
                  while( k < l && arr[k]===arr[k-1])k++
                  while(k<l &&arr[l]===arr[l+1])l--
             }
             
         }
         
         
     }
 }
 return res
  
    
}

console.log(foursum([-2,-2,-2,-1,-1,-1,0,0,0,2,2,2,2],8))


//better
function fourSum(nums, target) {
    const n = nums.length;
    const st = new Set();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const hashset = new Set();

            for (let k = j + 1; k < n; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                let fourth = target - sum;

                if (hashset.has(fourth)) {
                    let temp = [nums[i], nums[j], nums[k], fourth];
                    temp.sort((a, b) => a - b);
                    st.add(JSON.stringify(temp));
                }

                hashset.add(nums[k]);
            }
        }
    }

    return [...st].map(val => JSON.parse(val));
}

// Example:
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));




//FOUR SUM BRUTE FOURCE

function foursum(arr,tar){

let s = new Set()

for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        for(let k=j+1;k<arr.length;k++)
        {
            for(let l=k+1;l<arr.length;l++)
            {
                let sum=arr[i]+arr[j]+arr[k]+arr[l]
                    if(sum===tar)
                      {
                        let temparr=[arr[i],arr[j],arr[k],arr[l]]
                        temparr.sort((a,b)=>(a-b))
                            s.add(JSON.stringify(temparr))
                     }
            }
        }
        
    }
}

return [...s].map((val)=>JSON.parse(val))


    
    
}

console.log(foursum([-2,-2,-2,-1,-1,-1,0,0,0,2,2,2,2]))