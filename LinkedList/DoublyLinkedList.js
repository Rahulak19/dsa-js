class Node{
    constructor(val)
    {
        this.val=val;
        this.prev=null;
        this.next=null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.length=0;
        this.head=null;
        this.tail=null;
    }
    push(val){
        var newNode=new Node(val);
        if(!this.head)
        {
            this.head=newNode;
            this.tail=newNode;
           
        }
        else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }
    pop()
    {
        if(!this.head) return undefined;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        else{
        var node=this.tail;
        this.tail=node.prev;
        this.tail.next=null;
        node.prev=null;
        }
        this.length--;
        return node;
    }
    shift()
    {
        if (this.length==0) return undefined;
        var node=this.head;
        if(this.length==1)
        {
            this.head=null;
            this.tail=null;
            this.length--;
        }
        else{
            this.head=node.next;
            this.head.prev=null;
            node.next=null
            this.length--;
        }
        return node;
    }
    unshift(data){
        var node=new Node(data);
        if (this.length===0){
            this.head=node;
            this.tail=node;
        }
        else{
            node.next=this.head;
            this.head.prev=node;
            this.head=node;
        }
        this.length++;
        return this;
    }
    get(index)
    {
        if(index<0 || index>=this.length) return undefined;
        let count,current;
        if(index<=this.length/2)
        {
             count=0;
             current=this.head;
            while(count!=index)
            {
                count++;
                current=current.next;
            }
        }
        else{
             count=this.length-1;
             current=this.tail;
            while(count!=index)
            {
                current=current.prev;
                count--;
            }
           
        }
        return current;
    }
    set(index,value)
    {
        var getNode=this.get(index);
        if(getNode!=null || getNode!=this.undefined)
        {
            getNode.val=value;
            return true;
        }
        return false;
    }
    insert(index,val)
    {
        if(index<0||index>=this.length) return undefined;
        if(index===0) return this.unshift(val);
        if(index===this.length) return this.push(val);
        else{
            var prevNode=this.get(index-1);
            var nextNode=prevNode.next;
            var node=new Node(val);
            prevNode.next=node;
            node.prev=prevNode;
            nextNode.prev=node;
            node.next=nextNode;            
            this.length++;
            return this;
        }
    }
    remove(index)
    {
        if(index<0||index>=this.length) return undefined;
        if(index===0) return this.shift();
        if(index===this.length-1) return this.pop();
        else{
            var getNode=this.get(index);
            getNode.prev.next=getNode.next;
            getNode.next.prev=getNode.prev;
            getNode.next=null;
            getNode.prev=null;
            this.length--;
            return this;
        }
    }
}

let list=new DoublyLinkedList();
list.push(5)
list.push(8)
list.push(7)
list.push(4)
//console.log(list.shift())
//list.unshift(9)
// console.log(list.get(3))
// list.set(0,2)
list.remove(1);
console.log(list)