var inorderTraversal = function(root) {
    let result = [];

    function dfs(node) {
        if (node === null) return;

        dfs(node.left);        // Left
        result.push(node.val); // Root
        dfs(node.right);       // Right
    }

    dfs(root);
    return result;
};
