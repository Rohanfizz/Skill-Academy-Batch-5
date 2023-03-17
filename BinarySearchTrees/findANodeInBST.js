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

let tree = [10,20,30,40,50,60,70,80,100,110,120];

function createBST(tree,lbi,ubi){
    if(lbi > ubi) return null;

    let middleIdx = Math.floor((lbi+ubi)/2);
    let node = new Node(tree[middleIdx]);

    node.left = createBST(tree,lbi,middleIdx-1);
    node.right = createBST(tree,middleIdx+1,ubi);

    return node;
}
 
function search(currNode,val){
    if(currNode == null)  return false;
    if(currNode.val == val) return true;
    else if(val < currNode.val) return search(currNode.left,val);
    else return search(currNode.right,val);
}

function height(node){
    if(node == null) return 0;
    let heightOfLeft = height(node.left);
    let heightOfRight = height(node.right);
    return Math.max(heightOfLeft,heightOfRight)+1;
}

let root = createBST(tree,0,tree.length-1);

// console.log(search(root,85));

displayTree(root);
console.log(height(root));