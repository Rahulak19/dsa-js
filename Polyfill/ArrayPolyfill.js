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

Array.prototype.myReduce=function(callback,initialValue=null){
    let prev=initialValue;
    for(let i=0;i<this.length;i++)
    {
        prev=callback(prev,this[i],i,this)
    }
    return prev;
}

// eg for array.forEach

Array.prototype.myForEach=function(callback){
    for(let i=0;i<this.length;i++)
    {
        callback(this[i],i,this)
    }
}
arr.myForEach(val=>console.log(val))
