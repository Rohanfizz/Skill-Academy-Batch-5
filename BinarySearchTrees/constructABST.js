class Node{
    val;
    left;
    right;
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
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

let tree = [1,2,3,4,5,6,7,8,10,11,12];

function createBST(tree,lbi,ubi){
    if(lbi > ubi) return null;

    let middleIdx = Math.floor((lbi+ubi)/2);
    let node = new Node(tree[middleIdx]);

    node.left = createBST(tree,lbi,middleIdx-1);
    node.right = createBST(tree,middleIdx+1,ubi);

    return node;
}


let root = createBST(tree,0,tree.length-1);
displayTree(root);
