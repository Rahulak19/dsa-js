class Solution{

    topoSort(K,adj){
        let inDegree=new Array(K).fill(0);
        for(let i=0;i<K;i++)
        {
            for(let it of adj[i])
            {
                inDegree[it]++;
            }
        }
        let queue=[];
        for(let i=0;i<K;i++)
        {
            if(inDegree[i]===0)
            {
                queue.push(i);
            }
        }

        let result=[];
        while(queue.length!==0)
        {
            let node=queue.shift();
            result.push(node);

            for(let it of adj[node])
            {
                inDegree[it]--;
                if(inDegree[it]===0) 
                {
                    queue.push(it);
                }
            }
        }
        return result
    }
    findOrder(dict,N,K){
        let adj= new Array(K).fill(0).map(()=>[])

        for(let i=0;i<N-1;i++)
        {
            let s1=dict[i]
            let s2=dict[i+1];
            let min=Math.min(s1.length,s2.length);
            for(let j=0;j<min;j++)
            {
                if(s1[j]!==s2[j])
                {
                    adj[s1.charCodeAt(j)-'a'.charCodeAt(0)].push(s2.charCodeAt(j)-'a'.charCodeAt(0));
                    break;
                }
            }
        }
        let topo=this.topoSort(K,adj);
        console.log("topo",topo)
        let ans="";
        for(let i of topo)
        {
            ans=ans+String.fromCharCode(i+'a'.charCodeAt(0));
        }
        return ans;
    }
}


let N=5,K=4;
let dict=["baa","abcd","abca","cab","cad"];
let sol = new Solution;
let ans= sol.findOrder(dict,N,K);
console.log(ans);


