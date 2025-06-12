//MAXIMUM PRODUCT

var maxProduct = function(arr) {
    
let res= -Infinity

let suffix=1
let prefix=1

for(let i=0;i<arr.length;i++)
{

      suffix*=arr[i]
    prefix*=arr[arr.length-1-i]
    res=Math.max(res,Math.max(suffix,prefix))


 if(arr[i]===0)suffix =1
if(arr[arr.length-1-i]===0) prefix=1
    

    

}

return res

};