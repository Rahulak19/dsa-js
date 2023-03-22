class Node{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor()
    {
        this.first=null;
        this.last=null;
        this.size=0;
    }
    enqueue(value)
    {
        var node=new Node(value);
        if(this.size===0){
            this.first=node;
            this.last=node;
        }
        else{
            this.last.next=node;
            this.last=node;
        }
        this.size++;
        return this.size;
        
    }
    dequeue(){
        if(this.size===0) return undefined;
        if(this.size===1)
        {
            this.first=null;
            this.last=null;
        }
        else{
            var nextNode=this.first.next;
            this.first.next=null;
            this.first=nextNode;
        }
        this.size--;
        return this.size;
    }
}

var queue=new Queue();
queue.enqueue(6)
queue.enqueue(1)
queue.enqueue(4)
queue.dequeue()
queue.dequeue()
console.log(queue)