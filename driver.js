const Node = require('./Node');
const Tree = require('./Tree');

// const testNode = Node('test', null, null);
// testNode.left = Node('test2', null, null);
// console.log(testNode);
// console.log(testNode.data);
// console.log(testNode.left);
// console.log(testNode.left.data);

const tree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
// console.log(tree.buildTree());
tree.prettyPrint(tree.buildTree());