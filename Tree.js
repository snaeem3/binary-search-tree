const Node = require('./Node');

const Tree = (arr) => {
    const buildTree = () => {

        let unsortedArray = arr;
        unsortedArray.sort((a, b) => a - b); // Sort numerical array from smallest to largest
        let sortedArray = [...new Set(unsortedArray)]; // Remove duplicates
        return sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);

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

    const prettyPrint = (node, prefix = '', isLeft = true) => {
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }

    return {buildTree, prettyPrint};
};

module.exports = Tree;