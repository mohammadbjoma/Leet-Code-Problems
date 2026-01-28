var binaryTreePaths = function (root) {
  if (!root) return [];
  const res = [];

  function dfs(node, path) {
    path.push(String(node.val));

    if (!node.left && !node.right) {
      res.push(path.join("->"));
    } else {
      if (node.left) dfs(node.left, path);
      if (node.right) dfs(node.right, path);
    }

    path.pop();
  }

  dfs(root, []);
  return res;
};
