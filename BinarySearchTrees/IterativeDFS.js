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

class Pair{
    node;
    state;
    constructor(node,state){
        this.node = node;
        this.state = state;
    }
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
// displayTree(root);
function iterativeDFS(root){
    let preorder = "";
    let inorder = "";
    let postorder="";

    let stack = [];
    stack.push(new Pair(root,1));
    while(stack.length>0){
        let last = stack[stack.length-1];

        if(last.state == 1){
            //we are visiting this node for the first time
            preorder+= last.node.val+" ";
            stack[stack.length-1].state++;
            if(last.node.left != null) stack.push(new Pair(last.node.left,1));
        }else if(last.state == 2){
            //second time
            inorder+= last.node.val+" ";
            stack[stack.length-1].state++;
            if(last.node.right != null) stack.push(new Pair(last.node.right,1));
        }else{
            //third
            postorder+=last.node.val+" ";
            stack.pop();
        }
    }
    console.log(preorder);
    console.log(inorder);
    console.log(postorder);
}
iterativeDFS(root);