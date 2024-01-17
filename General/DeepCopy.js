let obj={a:1,b:["1",2,"@"],c:[],d:"hello",e:null,f:undefined};

function deepCopy(obj){
    if(typeof obj !=='object' || obj===null)
    {
        return obj;
    }

    if(Array.isArray(obj))
    {
        return obj.map(x=>deepCopy(x));
    }
    let constObj={};

    for(let key in obj)
    {
        if(obj.hasOwnProperty(key))
        {
            constObj[key]=deepCopy(obj[key]);
        }
    }
    return constObj
}

let k=deepCopy(obj);
console.log(k);