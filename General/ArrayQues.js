
function secArray(n,v,arr)
{
    let count=0,temp=0
    for(let i=0;i<n;i++)
    {
        arr[i]=arr[i]+v;
       // temp=n[i];
        for(let j=i+1;j<n;j++){
            if(arr[j]>=arr[i] && count<2)
            {
                count++;
                if(count==2)
                {
                   arr[i]=arr[j];
                    break;
                }
                
            }
           
        }
        if(count==0 || count==1)
        {
            arr[i]=-1;
        }
        count=0;
    }
    return arr;
}

console.log(secArray(7,2,[1,2,3,4,7,6,7]));