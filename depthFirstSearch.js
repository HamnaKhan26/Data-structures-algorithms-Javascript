// Binary Tree Structure
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Depth-First Search (Recursive) for Binary Tree
const dfs = (node) => {
    if (node === null) return; // Base case

    console.log(node.val);     // Process (Visit) the current node
    dfs(node.left);            // Explore the left subtree
    dfs(node.right);           // Explore the right subtree
};


// Depth-First Search (Iterative) for Binary Tree
const dfsIterative = (root) => {
    if (!root) return;

    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        console.log(node.val); // Process current node

        // Push right first so that left is processed first
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
};


const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
dfs(root);


// Time Complexity: O(V+E)
// Space Complexity:
// Recursive: O(h) (Height of the tree)
// Iterative: O(V) (Size of the stack)