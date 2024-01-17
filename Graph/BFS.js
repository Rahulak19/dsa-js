class Solution {
    // Function to return Breadth First Traversal of given graph.
    bfsOfGraph(V, adj) {
        // code here
        
        let bfs=[];
        let queue=[];
        let visited=new Array(V).fill(false);
        
        queue.push(0);
        visited[0]=true;
        
        while(queue.length !== 0)
        {
            let node=queue.shift();
            bfs.push(node);
            
            for(let neibr of adj[node])
            {
                if(!visited[neibr])
                {
                    
                    visited[neibr] = true;
                    queue.push(neibr);
                }
            }
            
        }
       
        return bfs;
    }
}

let adj = Array.from({ length: 5 }, () => []);
adj[0].push(1);
adj[1].push(0);
adj[0].push(4);
adj[4].push(0);
adj[1].push(2);
adj[2].push(1);
adj[1].push(3);
adj[3].push(1);

let sl = new Solution();
let ans = sl.bfsOfGraph(5, adj);
let n = ans.length;
for (let i = 0; i < n; i++) {
    console.log(ans[i] + " ");
}