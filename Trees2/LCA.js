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

let tree = [1,2,4,8,-1,-1,9,-1,-1,5,-1,-1,3,6,10,11,-1,-1,-1,-1,7,-1,12,13,-1,-1,14,-1,-1];
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

function LCA(root,val1,val2){
    let ntrp1 = ntrp(root,val1);
    let ntrp2 = ntrp(root,val2);
    let i = ntrp1.length-1;
    let j = ntrp2.length-1;
    while(i >=0 && j>=0 && ntrp1[i] == ntrp2[j]){
        i--
        j--
    }
    return ntrp1[i+1];
}

console.log(LCA(root,4,5));