// Binary Tree Structure
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Breadth-First Search (BFS) for Binary Tree
const bfs = (root) => {
    if (!root) return;

    const queue = [root];
    while (queue.length) {
        const node = queue.shift(); // Dequeue
        console.log(node.val);      // Process current node

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
};

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
bfs(root);


// Time Complexity: O(V+E)
// Space Complexity: O(V)
