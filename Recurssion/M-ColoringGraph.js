function graphColoring(G, color, i, C) {
    const n = G.length;
    if (solve(i, G, color, n, C)) return true;
    return false;
}

function isSafe(node, G, color, n, col) {
    for (const it of G[node]) {
        if (color[it] === col) return false;
    }
    return true;
}

function solve(node, G, color, n, m) {
    if (node === n) return true;

    for (let i = 1; i <= m; i++) {
        if (isSafe(node, G, color, n, i)) {
            color[node] = i;
            if (solve(node + 1, G, color, n, m)) return true;
            color[node] = 0;
        }
    }
    return false;
}

function main() {
    const N = 4;
    const M = 3;
    const G = Array.from({ length: N }, () => []);
    
    G[0].push(1);
    G[1].push(0);
    G[1].push(2);
    G[2].push(1);
    G[2].push(3);
    G[3].push(2);
    G[3].push(0);
    G[0].push(3);
    G[0].push(2);

    const color = new Array(N).fill(0);
    const ans = graphColoring(G, color, 0, M);

    if (ans) {
        console.log("1");
        console.log(ans);
    } else {
        console.log("0");
    }
}

main();
