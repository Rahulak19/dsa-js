class Solution {
    static dfs(node, vis, st, adj) {
        vis[node] = 1;
        for (let it of adj[node]) {
            if (vis[it] === 0) {
                Solution.dfs(it, vis, st, adj);
            }
        }
        st.push(node);
    }

    // Function to return list containing vertices in Topological order.
    static topoSort(V, adj) {
        let vis = new Array(V).fill(0);
        let st = [];

        for (let i = 0; i < V; i++) {
            if (vis[i] === 0) {
                Solution.dfs(i, vis, st, adj);
            }
        }

        let ans = [];
        let i = 0;
        while (st.length > 0) {
            ans[i++] = st[st.length - 1];
            st.pop();
        }
        return ans;
    }
}

// Example usage
let V = 6;
let adj = Array.from({ length: V }, () => []);
adj[2].push(3);
adj[3].push(1);
adj[4].push(0);
adj[4].push(1);
adj[5].push(0);
adj[5].push(2);

let ans = Solution.topoSort(V, adj);
console.log(ans.join(' '));
