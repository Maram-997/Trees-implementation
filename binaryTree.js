'use strict';

const node = require('./node')

class BinaryTree{
    constructor(root){
        this.root = root
    }
    // root -> left -> right
    preOrder(){
        let result = [];
        let recrusive = (node) => {
            result.push(node.value);
            if(node.left) recrusive(node.left);
            if(node.right) recrusive(node.right)
        }
        recrusive(this.root)
        return result;
    }
    // left -> root -> right
    inOrder(){
        let result = [];
        let recrusive = (node) => {
            if(node.left) recrusive(node.left);
            result.push(node.value);
            if(node.right) recrusive(node.right)
        }
        recrusive(this.root)
        return result;
    }
    // left -> right -> root 
    postOrder(){
        let result = [];
        let recrusive = (node) => {
            if(node.left) recrusive(node.left);
            if(node.right) recrusive(node.right)
            result.push(node.value);
        }
        recrusive(this.root)
        return result;
    }
}