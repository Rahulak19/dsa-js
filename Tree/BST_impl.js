class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root=null;
    }
    insert(value){
        var node=new Node(value);
        if(!this.root)
        {
            this.root=node;
            return this;
        }
        else{
           // this.insertNode(this.root,node)
           var current=this.root;
           while(true){
            if(current.value===node.value) return undefined;
            if(current.value>node.value)
            {
                if(current.left===null)
                {
                    current.left=node;
                    return this;
                }
                    current=current.left;
            }
            else{
                if(current.right===null)
                {
                    current.right=node;
                    return this;
                }
                    current=current.right;
                
            }
           }
        }
    }
    // Recursive approach 
   /* insertNode(node,newNode)
    {
        if(node.value>newNode.value)
        {
            if(node.left===null)
            {
                node.left=newNode;
            }
            else{
                this.insertNode(node.left,newNode)
            }
        }
        else{
            if(node.right===null)
            {
                node.right=newNode;
            }
            else{
                this.insertNode(node.right,newNode)
            }
        }
    } */
    find(value)
    {
        if(this.root===null) return false;
        var current=this.root;
        while(current)
        {
         if(value<current.value)
         {
            current=current.left;
         }
         else if(value>current.value)
         {
            current=current.right;
         } 
         else{
            return true;
         }  
        }
        return false;
    }
    BFS(){
        var node=this.root
        var queue=[]
        var data=[];
        queue.push(node);
        while(queue.length)
        {
            node=queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
     }
   DFS_PreOrder(){
    var data=[];
    var node = this.root;

    function traverse(node)
    {
        data.push(node.value);
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
    }
    traverse(node);
    return data;
   }
   DFS_PostOrder(){
    var data=[];
    var current=this.root;
    function traverse(node)
    {
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
        data.push(node.value);
    }
    traverse(current);
    return data;
   }
   DFS_InOrder(){
    var data=[];
    var current=this.root;
    function traverse(node)
    {
        if(node.left) traverse(node.left)
        data.push(node.value);
        if(node.right) traverse(node.right)
    }
    traverse(current);
    return data;
   }
}

var bst=new BinarySearchTree();
bst.insert(10)
bst.insert(6)
bst.insert(15)
bst.insert(3)
bst.insert(8)
bst.insert(20)
console.log(bst.DFS_InOrder())



