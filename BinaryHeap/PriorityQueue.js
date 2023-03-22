class Node{
    constructor(value,priority)
    {
        this.value=value;
        this.priority=priority;
    }
}
class PriorityQueue{  
    constructor(){
        this.values=[];
    }  
    enqueue(value,priority){
        let newNode=new Node(value,priority)
        this.values.push(newNode);
        this.bubbleUp()
        }
        bubbleUp(){
            var idx=this.values.length-1;
            var element=this.values[idx];
            while(idx>0)
            {
                var parentIndex=Math.floor((idx-1)/2);
                var parent=this.values[parentIndex];
                if(element.priority>=parent.priority) break;
                this.values[idx]=parent;
                this.values[parentIndex]=element;
                idx=parentIndex;
            }
            return this.values;
        }
        dequeue(){
            var min=this.values[0];
            var end=this.values.pop();
            this.values[0]=end;
            this.sinkDown();
            return min;
        }
        sinkDown(){
            let idx=0;
            let element=this.values[idx];
            while(true){
                // Formula to find left and right child index from root node
                var leftIdx=2*idx+1;
                var rightIdx=2*idx+2;
                var leftVal,rightVal;
                var swap=null;
                
                if(leftIdx <this.values.length)
                {
                    leftVal=this.values[leftIdx];
                    if(leftVal.priority<element.priority)
                    {
                        swap=leftIdx;
                    }
                }
                if(rightIdx<this.values.length){
                    rightVal=this.values[rightIdx]
                if(
                    (swap===null && rightVal.priority < element.priority) || 
                    (swap!==null && rightVal.priority<leftVal.priority )
                    )
                {
                    swap=rightIdx;
                }
            }
            if(swap===null) break;
            this.values[idx]=this.values[swap];
            this.values[swap]=element;
            idx=swap;
            }
        }
    }
var pr=new PriorityQueue();
pr.enqueue("cold",5)
pr.enqueue("accident",1)
pr.enqueue("broken arm",3)
pr.enqueue("concussion",2)
pr.enqueue("fever",4)
console.log(pr)
console.log(pr.dequeue())
console.log(pr.dequeue())
console.log(pr.dequeue())