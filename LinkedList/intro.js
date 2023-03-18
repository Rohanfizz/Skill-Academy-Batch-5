class Node{
    val;
    next;
    constructor(v){
        this.val = v;
        this.next = null;
    }
}

class LinkedList{
    head;
    size;
    constructor(arr){
        this.size = arr.length;
        if(arr.length  == 0){
            this.head = null;
            return;
        }
        this.head = new Node(arr[0]);
        let temp = this.head;

        for(let i = 1;i<arr.length;i++){
            temp.next = new Node(arr[i]);
            temp = temp.next;
        }
    }
    display=()=>{
        let temp = this.head;
        let s="";
        while(temp != null){
            s+=temp.val+" -> ";
            temp = temp.next;
        }
        s+="null";
        console.log(s);
    }
    getSize = ()=>{
        return this.size;
    }
    isEmpty = ()=>{
        if(this.size == 0) return true;
        return false;
    }
    addFirst = (val)=>{
        let nn = new Node(val);
        nn.next = this.head;
        this.head= nn;
        this.size++;
    }
    removeFirst = ()=>{
        if(this.isEmpty()){
            console.log("Linkedlist is Already Empty!");
            return -1;
        }
        this.size--;
        let res = this.head.val;
        this.head = this.head.next;
        return res;
    }
    addLast = (val)=>{
        if(this.isEmpty()){
            this.addFirst(val);
            return;
        }
        let temp = this.head;
        while(temp.next != null) temp = temp.next;
        temp.next = new Node(val);
        this.size++;
    }
    removeLast = ()=>{
        if(this.isEmpty()){
            console.log("Linkedlist is Already Empty!");
            return -1;
        }else if(this.size == 1){
            return this.removeFirst();
        }
        let temp = this.head;
        while(temp.next.next != null) temp = temp.next; //get to the second last pointer
        
        let res = temp.next.val;

        temp.next = null;
        this.size--;
        return res;
    }
}

let list = new LinkedList([]);
// console.log(list.getSize());
list.addLast(10);
list.display();
list.removeLast();
list.display();
