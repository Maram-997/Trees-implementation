'use strict';

const node = require('./node')

class BinaryTree {
    constructor(root) {
        this.root = root
    }
    // depth first

    // root -> left -> right
    preOrder() {
        let result = [];
        let recrusive = (node) => {
            result.push(node.value);
            if (node.left) recrusive(node.left);
            if (node.right) recrusive(node.right)
        }
        recrusive(this.root)
        return result;
    }
    // left -> root -> right
    inOrder() {
        let result = [];
        let recrusive = (node) => {
            if (node.left) recrusive(node.left);
            result.push(node.value);
            if (node.right) recrusive(node.right)
        }
        recrusive(this.root)
        return result;
    }
    // left -> right -> root 
    postOrder() {
        let result = [];
        let recrusive = (node) => {
            if (node.left) recrusive(node.left);
            if (node.right) recrusive(node.right)
            result.push(node.value);
        }
        recrusive(this.root)
        return result;
    }

    // Breadth First => lever order

    levelOrder(root) {
        // if there's no root
        if (!root) return [];
        const queue = [root];
        const result = [];
        // it will run as long as there's something in the queue
        // while the queue is not empty store the size/lenght of the queue and sit recoding to the iteration time
        while (queue.length) {
            let len = queue.length; // to remove the unesseccary elements

            // push whatever in the queue as current value
            result.push(queue.map(node => node.value));
            // inner while loop
            // here whatever the lenght is I want to shift/pull out and then push whatever on left and right
            while (len--) {
                let node = queue.shift();
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);

            }
        }
        return result;
    }

    findMaxim() {
        if (!this.root) {
            return null;
        }
        let result = this.root.value;
        let findMax = (node) => {
            if (node == null)
                return null;
            result = node.value
            let leftresult = findMax(node.left);
            let rightresult = findMax(node.right);

            if (leftresult > result) result = leftresult;
            if (rightresult > result) result = rightresult;
            return result;
        }
        findMax(this.root)
        return result
    }
    // findMin(node) {
    //     if (node == null) return null;

    //     var res = node.data;
    //     var lres = findMin(node.left);
    //     var rres = findMin(node.right);

    //     if (lres < res) res = lres;
    //     if (rres < res) res = rres;
    //     return res;
    // }

    fizzBuzz = (tree) => {
        let current = tree.root;
        let result = [];
        if (!current) return -1;
        let recrusive = (node) => {
          if (node.value % 3 == 0 && node.value % 5 == 0) {
            node.value = "fizzBuzz";
            result.push(node.value);
          } else if (node.value % 3 == 0) {
            node.value = "fizz";
            result.push(node.value);
          } else if ((node.value & 5) == 0) {
            node.value = "buzz";
            result.push(node.value);
          } else {
            result.push(node.value.toString());
          }
      
          if (node.left) recrusive(node.left);
          if (node.right) recrusive(node.right);
        };
        recrusive(current);
        return result;
      };
}

// code challenge class 19 - first question


const sumOddNumbers = (node) =>  {
    let node = this.root
    let result = [];
    let oddNum = (node) => {
        if (node !== null && node.value % 2 !== 0) {
            result.push(node.value);
        }
        if (node.left) {
            oddNum(node.left);
        }
        if (node.right) {
            oddNum(node.right);
        }
    };
    oddNum(this.root);
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}

// code challenge class 19 - second question
const Comparing=(T1,T2)=>{
    if(!T1.root) return 'there is no node in tree one '
    if(!T2.root) return 'there is no node in tree two '
    let current1 =T1.root
    let current2=T2.root
   
    let sum1=0
    let sum2=0

    let trevers=(node)=>{
        if(node.value!=='folder'){
            sum1++
        }
        if(node.left) trevers(node.left)
        if(node.right) trevers(node.right)
    }
    let trevers2=(node)=>{
        if(node.value!=='folder'){
            sum2++
        }
        if(node.left) trevers2(node.left)
        if(node.right) trevers2(node.right)
    }

    trevers(current1)
    
    trevers2(current2)
    

    if(sum2===sum1){
        return true
    }else{
        return false
    } 

}