class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(data)
    {
        var node=new Node(data);
        
        if(this.head===null)
        {
            this.head=node;
            this.tail=node;
        }
        else{
            this.tail.next=node;
            this.tail=node;
        }
        this.length++;
        return this;
    }
    pop()
    {
        if(this.length==0) return undefined;
        var current=this.head;
        var newTail=this.head;
        while(current.next)
        {
            newTail=current;
            current=current.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        this.length--;
        if(this.length==0)
        {
            this.head=null;
            this.tail=null;
        }
        return this;
    }
    shift(){
        if(this.length==0) return undefined;
        var newNode=this.head;
        this.head=newNode.next;
        this.length--;
        if(this.length==0)
        {
            this.tail=null;
        }
        return newNode
    }
    unshift(data){
        var node=new Node(data)
        if(!this.head)
        {
            this.head=node;
            this.tail=this.head;
        }else{
        node.next=this.head;
        this.head=node;
        }
        this.length++;
        return node;
    }
    get(data)
    {
        if(this.length<=0) return null;
        var current=this.head;
        var count =0;
        while(current){
            if(current.data===data)
            {
                return count;
            }
            else{
                count++;
                current=current.next;
            }
        }
        console.log("not found")
        return null;
    }
    getByIndex(index)
    {
        if(index<0 || index>=this.length) return null;
        var current=this.head;
        var counter=0;
        while(counter!==index){
            current=current.next;
            counter++;
        }
        return current;
    }
    set(index,value)
    {
       let current=this.getByIndex(index)
       if(!current)
       {
        return false
       }
       else{
        current.value=value;
        return true;
       }
    }
   insert(index,value)
   {
    if(index<0 || index>this.length) return false;
    if(index===0) return !!this.unshift(value);
    if(index===this.length)return !!this.push(value);
    var newNode=new Node(value);
    var prev=this.getByIndex(index-1)
    var temp=prev.next;
    prev.next=newNode;
    newNode.next=temp;
    this.length++;
    return true;
   }
   remove(index){
    if(index<0 || index>this.length) return false;
    if(index===0) return !!this.shift();
    if(index===this.length-1)return !!this.pop();
    var prev=this.getByIndex(index-1)
    var removeNode=prev.next;
    prev.next=removeNode.next;
    this.length--;
    return removeNode;
   }
   print(){
    var current=this.head;
    console.log(this.length)
    // for(var i=0;i<this.length;i++)
    while(current)
    {        
        process.stdout.write(`${current.data},`)
        current=current.next;
    }
   }
   reverse(){
    var node=this.head;
    this.head=this.tail;
    this.tail=node;
    var prev=null;
    var next;
    for(var i=0;i<this.length;i++)
    {
        next=node.next;
        node.next=prev;
        prev=node;
        node=next;
    }
   }
}

var list=new SinglyLinkedList();
list.push(10);
list.push(1);
list.push(6);
list.push(16);
list.pop();
list.shift();
list.unshift(4);
// console.log(list.get(1));
// console.log(list.set(12,8));

// console.log((list.getByIndex(0)))
console.log(list.insert(2,9));
//console.log(list.remove(1));
list.reverse()
console.log(list.print())