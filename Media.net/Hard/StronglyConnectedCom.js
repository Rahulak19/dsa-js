class Solution{
    dfs(node,vis,adj,stack){
        vis[node]=1;

        for(let it of adj[node])
        {
            if(!vis[it])
            {
                this.dfs(it,vis,adj,stack);
            }
        }
        stack.push(node);
    }

    dfs3(node,vis,adj){
        vis[node]=1;

        for(let it of adj[node])
        {
            if(!vis[it])
            {
                this.dfs3(it,vis,adj);
            }
        }
       
    }



    kosaraju(n,adj){
        let vis=new Array(n).fill(0);
        let stack=[];

        for(let i=0;i<n;i++)
        {
            if(!vis[i])
            {
                this.dfs(i,vis,adj,stack);
            }
        }

        let adjT=[];
        for(let i=0;i<n;i++)
        {
            adjT.push([]);
        }

        for(let i=0;i<n;i++)
        {
            vis[i]=0;
            for(let it of adj[i])
            {
                adjT[it].push(i);
            }
        }

        let scc=0;

        while(stack.length!==0)
        {
            let node=stack.pop();
            
                if(!vis[node])
                {
                    scc++;
                    this.dfs3(node,vis,adjT);
                }
        }
        return scc;
    }
}

const n = 5;
const edges = [
    [1, 0], [0, 2],
    [2, 1], [0, 3],
    [3, 4]
];

const adj = Array.from({ length: n }, () => []);
for(let i=0;i<n;i++)
{
   adj[edges[i][0]].push(edges[0][1]);
}
// for (var i = 0; i < n; i++) {
//     adj[edges[i][0]].push(edges[i][1]);
// }
console.log(adj)
const obj = new Solution();
const ans = obj.kosaraju(n, adj);
console.log("The number of strongly connected components is:", ans);