let balanced;

const dfs = (root) => {
  if (root == null) return 0;

  let left = dfs(root.left);
  let right = dfs(root.right);

  if (Math.abs(left - right) > 1) balanced = false;

  return 1 + Math.max(left, right);
};

var isBalanced = function (root) {
  balanced = true;
  dfs(root);
  return balanced;
};
