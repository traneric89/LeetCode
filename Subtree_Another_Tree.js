var isSubtree = function (root, subRoot) {
  if (!root) return false;

  return (
    isSameTree(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
};

// functions to check if both trees are identical , take both roots aas parameter

var isSameTree = function (p, q) {
  if (p == null && q == null) return true;
  if ((p == null && q != null) || (p != null && q == null)) return false;
  if (p.val != q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
