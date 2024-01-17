// Not completed
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
    constructBinaryTree(inorder,postOrder){
        if(inorder===null || postOrder===null || inorder.length!==postOrder.length) return null;
        let map = new Map();
        
        for(let i=0;i<inorder.length;i++)
        {
            map.set(inorder[i],i);
        }
    
        return this.constructBT(inorder,0,inorder.length-1,postOrder,0,postOrder.length-1,map);
    
    }
    
    constructBT(inorder,is,ie,postOrder,ps,pe,map){
    
        if(is>ie || ps>pe) return null;
        let root=new Node(postOrder[pe]);
    
        let inRoot=map.get(postOrder[pe]);
        let numLeft=inRoot-is;
    
        root.left=this.constructBT(inorder,is,inRoot-1,postOrder,ps,ps+numLeft-1,map);
        root.right=this.constructBT(inorder,inRoot+1,ie,postOrder,ps+numLeft,pe-1,map);
    
        return root;
    
    
    }
}






let inorder = [4, 5, 2, 6, 7, 3, 1]
let postOrder = [4, 2, 5, 1, 6, 3, 7];

let sol=new Node();
console.log(sol.constructBinaryTree(inorder,postOrder));