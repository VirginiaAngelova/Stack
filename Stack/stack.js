class Node {
    constructor(value,next) {
        this.value = value;
        this.next = next;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }
    push(value){
        let node = new Node(value,this.top);
        this.top = node;

        this.print();
    }
    pop(){
        let value = null;

        if (this.top){
            value = this.top.value;
            this.top=this.top.next;
        }

        this.print();
        return value;
    }
    print(){
        let pointer = this.top;
        while(pointer){
            console.log(pointer.value);
            pointer = pointer.next;
        }
   console.log("End of the stack");
    }
}

let s = new Stack();
s.push("Pesho");
s.push("Mimi");
s.push("Ivana");

s.pop();
s.pop();
s.pop();
