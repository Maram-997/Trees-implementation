class Node
    {
        constructor(key) { 
           this.child = [];
           this.key = key;
        }
    }
     
    // Utility function to create a new tree
    // node with k children
    function newNode(value)
    {
        let nNode = new Node(value);
        return nNode;
    }
 
    let ind;
 
    // Function to build full k-ary tree
    function BuildKaryTree(A, n, k, h)
    {
        // For null tree
        if (n <= 0)
            return null;
 
        let nNode = newNode(A[ind]);
        if (nNode == null)
        {
            return null;
        }
 
        // For adding k children to a node
        for (let i = 0; i < k; i++)
        {
 
            // Check if ind is in range of array
            // Check if height of the tree is greater than 1
            if (ind < n - 1 && h > 1)
            {
                ind++;
 
                // Recursively add each child
                nNode.child.push(BuildKaryTree(A, n, k, h - 1));
            }
            else
            {
                nNode.child.push(null);
            }
        }
        return nNode;
    }
 
    // Function to find the height of the tree
    function BuildKaryTree_1(A, n, k, In)
    {
        let height = Math.ceil(Math.log(n * (k - 1) + 1) / Math.log(k));
        ind = In;
        return BuildKaryTree(A, n, k, height);
    }
 
    // Function to print postorder traversal of the tree
    function postord(root, k)
    {
        if (root == null)
            return;
        for (let i = 0; i < k; i++)
            postord(root.child[i], k);
        

    }