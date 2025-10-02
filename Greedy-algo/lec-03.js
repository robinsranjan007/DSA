function sfj(arr)
{
    arr.sort((a,b)=>(a-b))

let waitingtime=0;
let executiotime=0;

for(let x of arr)
{

    waitingtime+=executiotime
    executiotime+=x
}

return waitingtime/arr.length


}

console.log(sfj(arr[4,3,7,1,2]))