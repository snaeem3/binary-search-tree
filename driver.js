const Node = require('./Node');
const Tree = require('./Tree');

console.log('Initial Tree');
const tree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.prettyPrint(tree.buildTree());

console.log('Inserting 68 into tree');
tree.insert(68);
tree.prettyPrint();

// No children delete example
console.log('Deleting 68 from tree');
tree.deleteValue(68);
tree.prettyPrint();

// 1 child delete example
console.log('Deleting 324 from tree');
tree.deleteValue(324);
tree.prettyPrint();

// 2 child delete example
console.log('Deleting 8 from tree');
tree.deleteValue(8);
tree.prettyPrint();

// Find example
console.log('Calling tree.find(67)')
tree.prettyPrint((tree.find(67)));

// Level Order example
console.log('Calling tree.levelOrder()');
console.log(tree.levelOrder());

// Level Order example - square and print every value
console.log('Calling tree.levelOrder() with square function');
const squareFunc = function printSquare(num) { console.log(num * num); }
console.log(tree.levelOrder(squareFunc));

// Inorder example
console.log('Calling tree.inorder');
console.log(tree.inorder());

// Preorder example
console.log('Calling tree.preorder');
console.log(tree.preorder());

// Postorder example
console.log('Calling tree.postorder');
console.log(tree.postorder());

// Height example
tree.prettyPrint();
console.log(`Height of root: ${tree.height(tree.getRoot())}`);
console.log(`Height of node right of root: ${tree.height(tree.getRoot().right)}`);

// Depth example
console.log(`Depth of root: ${tree.depth(tree.getRoot())}`);
console.log(`Depth of node right of root: ${tree.depth(tree.getRoot().right)}`);

// isBalanced example
console.log(`Is tree balanced? ${tree.isBalanced()}`);
console.log('Adding 2 large values to tree');
tree.insert(6346);
tree.insert(6347);
tree.prettyPrint();
console.log(`Is tree balanced? ${tree.isBalanced()}`);


// rebalance example
tree.prettyPrint();
console.log('Rebalancing tree');
tree.rebalance();
tree.prettyPrint();
console.log(`Is tree balanced? ${tree.isBalanced()}`);

// Inorder example
console.log('Calling tree.inorder');
console.log(tree.inorder());

// Preorder example
console.log('Calling tree.preorder');
console.log(tree.preorder());

// Postorder example
console.log('Calling tree.postorder');
console.log(tree.postorder());