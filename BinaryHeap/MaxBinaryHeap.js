class MaxBinaryHeap{
    constructor(){
        this.values=[41,39,33,18,27,12];
    }
    // My Solution
    /* 
    insert(num){
        this.values.push(num)
        var index=this.values.length-1;
        var parentIndex=Math.floor((index-1)/2);
        console.log(parentIndex)
        while(this.values[index]>this.values[parentIndex])
        {
            this.swap(this.values,parentIndex,index)
            index=parentIndex;
            parentIndex=Math.floor((index-1)/2);
        }
        
        return this.values;
    }
    swap(arr,ele1,ele2)
        {
            var temp=arr[ele1];
            arr[ele1]=arr[ele2];
            arr[ele2]=temp;
        } */
    insert(num){
        this.values.push(num);
        this.bubbleUp()
        }
        bubbleUp(){
            var idx=this.values.length-1;
            var element=this.values[idx];
            while(idx>0)
            {
                var parentIndex=Math.floor((idx-1)/2);
                var parent=this.values[parentIndex];
                if(element<=parent) break;
                this.values[idx]=parent;
                this.values[parentIndex]=element;
                idx=parentIndex;
            }
            return this.values;
        }
        extractMax(){
            var max=this.values[0];
            var end=this.values.pop();
            this.values[0]=end;
            this.sinkDown();
            return this.values;
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
                    if(leftVal>element)
                    {
                        swap=leftIdx;
                    }
                }
                if(rightIdx<this.values.length){
                    rightVal=this.values[rightIdx]
                if(
                (swap===null && rightVal > element) || 
                (swap!==null && rightVal>leftVal )
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
   

var maxHeap=new MaxBinaryHeap();
 console.log(maxHeap.insert(55))
// console.log(maxHeap.insert(1))
// console.log(maxHeap.insert(45))
// console.log(maxHeap.insert(199))
// console.log(maxHeap) 
 console.log(maxHeap.extractMax()) 