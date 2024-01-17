let arr=[2,3,4,5,6]
// eg for array.filter
Array.prototype.myFilter=function (callback){
    let newArr=[];
    for(let i=0;i<this.length;i++)
    {
        if(callback(this[i],i,this))
        {
            newArr.push(this[i])
        }
    }
    return newArr;
}

// eg for array.map

Array.prototype.myMap=function(callback){
    let newArray=[];
    for(let i=0;i<this.length;i++)
    {
        newArray.push(callback(this[i],i,this))
    }
    return newArray;
}
// eg for array.reduce

// Array.prototype.myReduce=function(callback,initialValue=null){
//     let prev=initialValue;
//     for(let i=0;i<this.length;i++)
//     {
//         prev=callback(prev,this[i],i,this)
//     }
//     return prev;
// }

// eg for array.forEach

Array.prototype.myForEach=function(callback){
    for(let i=0;i<this.length;i++)
    {
        callback(this[i],i,this)
    }
}
//arr.myForEach(val=>console.log(val))

Array.prototype.myReduce=function(callback,initialValue=null){
    let prev=initialValue;
    for(let i=0;i<this.length;i++){
        prev=callback(prev,this[i],i,this);
    }
    return prev;
}

function arrFlat(arr,depth=0){
    let result=[];
    for(let val of arr){
        if(Array.isArray(val) && depth>0){
            result.push(...arrFlat(val,depth-1))
        } else{
            result.push(val);
        }
       
    }
    return result;
}

let array=[[1,2],[2,3],[[5,6],8]];
console.log(arrFlat(array,2))
// let sum=arr.myReduce((acc,curr)=>acc+curr,10)
// console.log(sum)