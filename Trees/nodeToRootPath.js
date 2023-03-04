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

function ntrp(root,val){
    if(root == null) return [];
    if(root.val == val){
        return [val];
    }
    let left = ntrp(root.left,val);
    if(left.length > 0){
        left.push(root.val);
        return left;
    }

    let right = ntrp(root.right,val);
    if(right.length>0){
        right.push(root.val);
        return right;
    }
    return [];
}

let ans = ntrp(root,45)
console.log(ans);