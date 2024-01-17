class Solution {
    dfs(node, vis, adj, ls) {
        // Marking the current node as visited
        vis[node] = true;
        ls.push(node);

        // Getting neighbor nodes
        for (let neighbor of adj[node]) {
            if (!vis[neighbor]) {
                this.dfs(neighbor, vis, adj, ls);
            }
        }
    }

    // Function to return a list containing the DFS traversal of the graph.
    dfsOfGraph(V, adj) {
        // Boolean array to keep track of visited vertices
        let vis = new Array(V + 1).fill(false);
        vis[0] = true;
        let ls = [];
        this.dfs(0, vis, adj, ls);
        return ls;
    }
}

// Example usage
let adj = Array.from({ length: 5 }, () => []);
adj[0].push(2);
adj[2].push(0);
adj[0].push(1);
adj[1].push(0);
adj[0].push(3);
adj[3].push(0);
adj[2].push(4);
adj[4].push(2);

let sl = new Solution();
let ans = sl.dfsOfGraph(5, adj);
console.log(ans.join(' '));
