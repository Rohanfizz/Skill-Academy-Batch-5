// let tree = [20, 8, 4, -1, -1, 12, 10, -1, -1, 14, -1, -1, -1];
class Node {
    left;
    right;
    val;
    constructor(v) {
        this.val = v;
        this.left = null;
        this.right = null;
    }
}

function serialize(tree) {
    let idx = 0;
    function solve(tree) {
        if (idx == tree.length) return null;
        if (tree[idx] == -1) {
            idx++;
            return null;
        }
        let nn = new Node(tree[idx]);
        idx++;
        nn.left = solve(tree);
        nn.right = solve(tree);
        return nn;
    }

    let root = solve(tree);
    return root;
}

let tree = [5,27,64,-1,1,-1,-1,-1,22,19,45,-1,-1,33,-1,-1];
let root = serialize(tree);

let preorder = "";
let inorder = "";
let postorder="";


function dfs(node){
    if(node == null) return;
    preorder += node.val+" ";
    dfs(node.left);
    inorder+= node.val+" ";
    dfs(node.right);
    postorder += node.val+" ";
}
dfs(root);
console.log(preorder);
console.log(inorder);
console.log(postorder);
