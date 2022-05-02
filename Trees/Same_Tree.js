var isSameTree = function (p, q) {
  let stack1 = [p];
  let stack2 = [q];

  while (stack1.length > 0 && stack2.length > 0) {
    let curr1 = stack1.pop();
    let curr2 = stack2.pop();

    if ((!curr1 && curr2) || (curr1 && !curr2)) return false;

    if (curr1 && curr2 && curr1.val != curr2.val) return false;

    if (curr1) {
      stack1.push(curr1.right);
      stack1.push(curr1.left);
    }

    if (curr2) {
      stack2.push(curr2.right);
      stack2.push(curr2.left);
    }
  }
  return true;
};

//Recursive DFS
var isSameTree = function (p, q) {
  if (p == null && q == null) return true;
  if ((p == null && q != null) || (p != null && q == null)) return false;
  if (p.val != q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
