class Node {
    val;
    next;
    constructor(v) {
        this.val = v;
        this.next = null;
    }
}

class LinkedList {
    head;
    size;
    constructor(arr) {
        this.size = arr.length;
        if (arr.length == 0) {
            this.head = null;
            return;
        }
        this.head = new Node(arr[0]);
        let temp = this.head;

        for (let i = 1; i < arr.length; i++) {
            temp.next = new Node(arr[i]);
            temp = temp.next;
        }
    }
    display = () => {
        let temp = this.head;
        let s = "";
        while (temp != null) {
            s += temp.val + " -> ";
            temp = temp.next;
        }
        s += "null";
        console.log(s);
    };
    getSize = () => {
        return this.size;
    };
    isEmpty = () => {
        if (this.head == null) return true;
        return false;
    };
    addFirst = (val) => {
        let nn = new Node(val);
        nn.next = this.head;
        this.head = nn;
        this.size++;
    };
    removeFirst = () => {
        if (this.isEmpty()) {
            console.log("Linkedlist is Already Empty!");
            return -1;
        }
        this.size--;
        let res = this.head.val;
        this.head = this.head.next;
        return res;
    };
    addLast = (val) => {
        if (this.isEmpty()) {
            this.addFirst(val);
            return;
        }
        let temp = this.head;
        while (temp.next != null) temp = temp.next;
        temp.next = new Node(val);
        this.size++;
    };
    removeLast = () => {
        if (this.isEmpty()) {
            console.log("Linkedlist is Already Empty!");
            return -1;
        } else if (this.size == 1) {
            return this.removeFirst();
        }
        let temp = this.head;
        while (temp.next.next != null) temp = temp.next; //get to the second last pointer

        let res = temp.next.val;

        temp.next = null;
        this.size--;
        return res;
    };
    //linkedlist part 2
    getAt = (target) => {
        if (target < 0 || target >= this.size) {
            console.log("Invalid index!");
            return -1;
        }
        let idx = 0;
        let temp = this.head;

        while (idx != target) {
            idx++;
            temp = temp.next;
        }
        return temp.val;
    };
    getNodeAt = (target) => {
        if (target < 0 || target >= this.size) {
            console.log("Invalid index!");
            return null;
        }
        let idx = 0;
        let temp = this.head;

        while (idx != target) {
            idx++;
            temp = temp.next;
        }
        return temp;
    };
    removeAt = (target) => {
        if (target == 0) {
            return this.removeFirst();
        } else if (target == this.size - 1) {
            return this.removeLast();
        } else if (target < 0 || target >= this.size) {
            console.log("Invalid Index!");
            return -1;
        }
        let prevNode = this.getNodeAt(target - 1);
        let res = prevNode.next.val;
        prevNode.next = prevNode.next.next;
        return res;
    };
    addAt = (val, targetIdx) => {
        if (targetIdx < 0 || targetIdx > this.size) {
            console.log("Invalid Index!");
            return;
        } else if (targetIdx == 0) {
            this.addFirst(val);
            return;
        } else if (targetIdx == this.ize) {
            this.addLast(val);
            return;
        }
        let prevNode = this.getNodeAt(targetIdx - 1);
        let tempNext = prevNode.next;
        let nn = new Node(val);

        prevNode.next = nn;
        nn.next = tempNext;
        this.size++;
    };
    reverseBruteForce = () => {
        let i = 0;
        let j = this.size - 1;

        while (i < j) {
            let node1 = this.getNodeAt(i);
            let node2 = this.getNodeAt(j);
            //Swapping
            let temp = node1.val;
            node1.val = node2.val;
            node2.val = temp;
            i++;
            j--;
        }
    };
    reverseOptimal = () => {
        if (this.isEmpty()) return;
        let prev = null;
        let curr = this.head;
        let next = this.head.next;

        while (curr != null) {
            curr.next = prev;
            prev = curr;
            curr = next;
            if (next != null) next = next.next;
        }
        this.head = prev;
    };
    getMid = () => {
        if(this.isEmpty()){
            console.log("LinkedList is Empty!");
            return -1;
        }
        let slow = this.head;
        let fast = this.head;

        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.val;
    };
    hasCycle = function() {
        if(head == null) return false;
        let slow = head;
        let fast = head;
    
        while(fast.next != null && fast.next.next!=null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast) return true;
        }
        
        return false;
    };
}

let list = new LinkedList([]);
// console.log(list.getSize());
list.display();

console.log(list.getMid());
