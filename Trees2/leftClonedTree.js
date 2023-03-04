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

// let tree = [1,2,4,8,-1,-1,9,-1,-1,5,-1,-1,3,6,10,11,-1,-1,-1,-1,7,-1,12,13,-1,-1,14,-1,-1];
let tree = [1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1];

let root = serialize(tree);


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
function displayTree(node){
    if(node == null) return;

    let myOutput = ""+node.val+": ";
    //leftchild
    if(node.left != null){
        myOutput += node.left.val+", ";
    }else myOutput+="-1, ";

    //rightchild
    if(node.right != null){
        myOutput+=node.right.val+", ";
    }else myOutput+="-1, ";
    console.log(myOutput);

    displayTree(node.left);
    displayTree(node.right);
}
function leftClonedTree(node){
    if(node == null) return;
    let clone = new Node(node.val);
    clone.left = node.left;
    node.left = clone;
    leftClonedTree(node.left.left);
    leftClonedTree(node.right);
}

leftClonedTree(root);
displayTree(root);