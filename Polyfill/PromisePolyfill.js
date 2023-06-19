function PromisePolyfill(executer){
    let onResolve,onReject,isFulfilled=false,isRejected=false,isCalled=false,called=false,value;

    function resolve(val){
        isFulfilled=true;
        value=val;
        if(typeof onResolve==='function'){
            console.log("inside resolve")
            onResolve(val)
            isCalled=true;
        }
       
    }
    function reject(val){
        isRejected=true;
        value=val;
        if(typeof onReject==='function')
        {
            onReject(value)
            isCalled=true;
        }
    }

    this.then=function (callback){
        onResolve=callback;
        if(isFulfilled && !isCalled)
        {
            called=true;
            onResolve(value)
        }
        return this;
    }

    this.catch=function (callback){
        onReject=callback;
        if(isRejected && !isCalled)
        {
            called=true;
            onReject(value)
        }
        return this;
    }
    try{
        executer(resolve,reject)
    }
    catch(err){
        reject(err)
    }
   
}

let myPromise=new PromisePolyfill((resolve,reject)=>{
    // setTimeout(()=>{
        reject(19)
    // },100)
})

myPromise.then((res)=>{
    console.log(`Resolved ::${res}`);
})
.catch((err)=>{
    console.log(`Rejected :: ${err}`);
})