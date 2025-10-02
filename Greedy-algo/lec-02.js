function lemonade(bills)
{
let five=0;
let ten=0;

for(let x of bills)
{
    
if(x==5)
{
    five++
}
else if(x==10)
{
    if(five>0)
    {
        five--
    }
    else
    {
        return false
    }
    ten++
}
else
{
    if(five >=1 && ten>0)
    {
        five-=1
        ten-=1
    }
    else if(five>=3)
    {
        five-=3
    }
    else
    {
        return false
    }
    
    
}

    
}
    
  return true  
    
}