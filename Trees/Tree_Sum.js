class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let node1 = new Node(3);
let node2 = new Node(11);
let node3 = new Node(4);
let node4 = new Node(4);
let node5 = new Node(2);
let node6 = new Node(1);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;

//Recursive DFS
// const treeSum = (root) => {
//   if (root == null) return 0;
//   return root.val + treeSum(root.left) + treeSum(root.right);
// };
// console.log(treeSum(node1));

//Iterative DFS
// const treeSum = (root) => {
//   if (root == null) return 0;
//   let sum = 0;
//   let stack = [root];

//   while (stack.length > 0) {
//     let nodeVal = stack.pop();
//     sum = sum + nodeVal.val;

//     if (nodeVal.right != null) stack.push(nodeVal.right);
//     if (nodeVal.left != null) stack.push(nodeVal.left);
//   }
//   return sum;
// };
// console.log(treeSum(node1));

// Iterative BFS
const treeSum = (root) => {
  if (root == null) return 0;

  let sum = 0;
  let queue = [root];

  while (queue.length > 0) {
    let nodeVal = queue.shift();
    sum = sum + nodeVal.val;

    if (nodeVal.right != null) queue.push(nodeVal.right);
    if (nodeVal.left != null) queue.push(nodeVal.left);
  }
  return sum;
};
console.log(treeSum(node1));
