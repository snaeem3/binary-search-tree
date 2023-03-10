const Node = require('./Node');

const Tree = (arr) => {
    let root = null;

    const getRoot = () => {
        return root;
    }

    const buildTree = () => {

        let unsortedArray = arr;
        unsortedArray.sort((a, b) => a - b); // Sort numerical array from smallest to largest
        let sortedArray = [...new Set(unsortedArray)]; // Remove duplicates
        root =  sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);
        return root;

        function sortedArrayToBST(sortedArr, start, end) {
            if (start > end) {
                return null;
            }

            const midIndex = Math.floor((start + end) / 2);
            const rootNode = Node(sortedArr[midIndex]);

            rootNode.left = sortedArrayToBST(sortedArr, start, midIndex - 1);
            rootNode.right = sortedArrayToBST(sortedArr, midIndex + 1, end);

            return rootNode;

        }
    }

    const insert = (value) => {
        console.log(`root: ${root}`);
        root = insertRec(root, value);
        return root;

        function insertRec(node, val) {
            if (node === null) {
                return Node(value);
            }

            if (val < node.data) {
                node.left = insertRec(node.left, val);
            } else if (val > node.data) {
                node.right = insertRec(node.right, val);
            }

            return node;
        } 
    }

    const deleteValue = (value) => {
        root = deleteRec(root, value);
        return root;

        function deleteRec(node, val) {
            // check if current node is the node to be deleted
            if (val < node.data) {
                node.left = deleteRec(node.left, val);
            } else if (val > node.data) {
                node.right = deleteRec(node.right, val);
            } else {
                // check the number of children
                if (node.left === null) {
                    return node.right;
                } else if (node.right === null) {
                    return node.left;
                } else {
                    // current node has 2 children
                    node.data = getMinValue(node.right);
                    node.right = deleteRec(node.right, node.data); // Delete the node that was just promoted
                }
            }

            return node;

            function getMinValue(nd) {
                let minValue = nd.data;
                while (nd.left!== null) {
                    minValue = nd.left.data;
                    nd = nd.left;
                }
                return minValue;
            } 
        }
    }

    // Accepts a value and returns the node with the given value
    const find = (value) => {
        return findRec(root, value);
        
    }
    function findRec(node, val) {
        if (node === null) {
            return null;
        }
        if (node.data === val) {
            return node;
        } else if (val < node.data) {
            return findRec(node.left, val);
        } else if (val > node.data) {
            return findRec(node.right, val);
        }
    }

    // Traverses tree in breadth-first level order and provide each node as the input to the given function
    const levelOrder = (fn) => {
        let inputGiven = true;
        if (typeof fn === 'undefined') {
            inputGiven = false;
        }
        if (root === null) {
            return;
        }

        let valArray = [];
        let queue = [];
        queue.push(root);
        while (queue.length > 0) {
            currentNode = queue.shift();
            if (!inputGiven) {
                valArray.push(currentNode.data);
            } else {
                fn(currentNode.data);
            }
            // console.log(currentNode.data);
            if (currentNode.left!== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right!== null) {
                queue.push(currentNode.right);
            }
        }

        if (!inputGiven) {
            return valArray;
        }
    }

    // Traverses tree depth-first in preorder: root -> left subtree -> right subtree
    const preorder = (fn) => {
        let inputGiven = true;
        if (typeof fn === 'undefined') {
            inputGiven = false;
        }
        if (root === null) {
            return;
        }

        let valArray = [];
        preorderRec(root);
        
        if (!inputGiven) {
            return valArray;
        }

        function preorderRec(node) {
            if (node === null) {
                return;
            }
            if (!inputGiven) {
                valArray.push(node.data);
            } else {
                fn(node.data);
            }
            preorderRec(node.left);
            preorderRec(node.right);
        }
    }

    // Traverses tree depth-first in order: left subtree -> root -> right subtree
    const inorder = (fn) => {
        let inputGiven = true;
        if (typeof fn === 'undefined') {
            inputGiven = false;
        }
        if (root === null) {
            return;
        }

        let valArray = [];
        inorderRec(root);
        
        if (!inputGiven) {
            return valArray;
        }

        function inorderRec(node) {
            if (node === null) {
                return;
            }
            inorderRec(node.left);
            if (!inputGiven) {
                valArray.push(node.data);
            } else {
                fn(node.data);
            }
            inorderRec(node.right);
        }
    }

    // Traverses tree depth-first in postorder: left subtree -> right subtree -> root
    const postorder = (fn) => {
        let inputGiven = true;
        if (typeof fn === 'undefined') {
            inputGiven = false;
        }
        if (root === null) {
            return;
        }

        let valArray = [];
        postorderRec(root);
        
        if (!inputGiven) {
            return valArray;
        }

        function postorderRec(node) {
            if (node === null) {
                return;
            }

            postorderRec(node.left);
            postorderRec(node.right);
            if (!inputGiven) {
                valArray.push(node.data);
            } else {
                fn(node.data);
            }
        }
    }

    const height = (node = root) => {
        if (node === null) {
            return 0;
        }

        return Math.max(height(node.left), height(node.right)) + 1;
    }

    const depth = (node) => {
        return depthRec(root, node.data);
        
        function depthRec (subtreeRoot, val) {
            
            if (subtreeRoot === null) {
                return -1;
            }
            
            let dist = -1;
            if (subtreeRoot.data === val  || 
                (dist = depthRec(subtreeRoot.left, val)) >= 0 || 
                (dist = depthRec(subtreeRoot.right, val)) >= 0) {
                    return dist + 1;
            }
            return dist;
        }
    }

    const isBalanced = (node = root) => {
        if (node === null) {
            return true;
        }

        const heightLeft = height(node.left);
        const heightRight = height(node.right);

        return Math.abs(heightLeft - heightRight) <= 1 && isBalanced(node.left) && isBalanced(node.right);
    }

    const rebalance = () => {
        arr = inorder();
        buildTree();
    }
    

    const prettyPrint = (node = root, prefix = '', isLeft = true) => {
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }

    return {
        getRoot, 
        buildTree, 
        insert, 
        deleteValue, 
        find,
        levelOrder, 
        preorder, 
        inorder, 
        postorder,
        height,
        depth,
        isBalanced,
        rebalance,
        prettyPrint
    };
};

module.exports = Tree;