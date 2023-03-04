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

let tree = [1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1];
let idx = 0;

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
function serialize(tree){
    if(idx == tree.length || tree[idx] == -1){
        idx++;
        return null;
    }

    let me = new Node(tree[idx]);
    idx++;

    me.left = serialize(tree);
    me.right = serialize(tree);
    return me;
}

let root = serialize(tree);
displayTree(root);