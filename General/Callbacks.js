
// function newFun(name,again)
// {
//     return again("hello "+name)
// }
// console.log(newFun("vk",(msg)=>{
//     console.log(msg)
// }))

function greeting(name) {
    console.log(`Hello, ${name}`);
  }
  
  function processUserInput(greeting) {
    const name = "vk"
    greeting(name);
  }
  
  processUserInput(greeting);