let obj1={
    name:"rahul",
    age:24,
    print:function(country){
        console.log(`My name is ${this.name}, age is ${this.age} and country is ${country}`)
    }
}

let obj2={
    name:"John",
    age:20
}

// obj1.print("India");
// obj1.print.call(obj2,"Aus");
// obj1.print.apply(obj2,["Eng"]);

Function.prototype.myBind=function(...args){
    let context=this,valus=args.slice(1);
    return function(...args2){
        context.apply(args[0],[...valus,...args2]);
    }
}

let bindFn=obj1.print.myBind(obj2);
bindFn("USA")