import { Compare, defaultCompare } from "../util.js";
import { Node } from "./Node.js";

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // 用来比较节点值
        this.root = null; // {1} Node类型的根节点
    }

    // 向二叉搜索树中插入一个键
    insert(key) {
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }

    // 中序遍历：左中右
    // 回调函数用来定义我们对遍历到的每个节点进行的操作
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) { // 递归算法的基线条件
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    // 先序遍历：中左右

}

// Test code
// insert node
const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

// in order tranverse
const printNode = (value) => console.log(value); // {6}
tree.inOrderTraverse(printNode); // {7}