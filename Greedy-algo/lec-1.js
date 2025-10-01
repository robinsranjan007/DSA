function assigncookies(greed,cookies)
{
let l=0;
let r=0;
greed.sort()
cookies.sort()


while(l<greed.length && r < cookies.length)
{

if(cookies[r]>=greed[l])
{
  l++
}
 r++


    
}
    return l
    
}


console.log(assigncookies([1,3,3,4,5],[1,1,2,2,3,4]))









