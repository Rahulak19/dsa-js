class Node{
    constructor(data)
    {
        this.data=data;
        this.left=null;
        this.right=null
    }
}

class BinarySearchTree{
    constructor()
    {
        this.root=null;
    }

    insert(data) {
        var newNode=new Node(data);
        if(this.root===null)
        {
            this.root=newNode;
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(node,newNode)
    {
        if(newNode.data<node.data)
        {
            if(node.left===null)
            {
                node.left=newNode
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
    }
    remove(data)
    {
        this.root=this.removeNode(this.root,data)
    }
    removeNode(node,data)
    {
        if(node===null)
        {
            return null
        }
        else if(data<node.data)
        {
            node.left=this.removeNode(node.left,data)
        }
        else if(data>node.data)
        {
            node.right=this.removeNode(node.right,data)
        }
        else{
            if(node.left===null && node.right===null)
            {
                node=null;
                return node;
            }
            else if(node.left===null)
            {
                node=node.right;
                return node
            }
            else if(node.right===null)
            {
                node=node.left;
                return node
            }
            else{
                var alt=this.findMinNode(node.right,key)
                node.data=alt.data;
                node.right=this.removeNode(node.right,alt.data)
                return node;
            }
        }
    }
    findMinNode(node,data)
    {
        if(node.left===null)
        {
            return node;
        }
        else{
            return this.findMinNode(node.right,data)
        }
    }
    getRootNode(){
        return this.root;
    }
    inOrder(node)
    {
        if(node!==null)
        {
            this.inOrder(node.left)
            console.log(node.data)
            this.inOrder(node.right)
        }
    }
}

var BST=new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

Bst.remove(7)

var root=BST.getRootNode();
BST.inOrder(root)
// console.log(root)
// console.log(JSON.stringify(BST))