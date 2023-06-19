

function delay(i) {
   
}
async function test() {
    console.log("start")
    for (let i = 0; i < 10; i++) {
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(i)
            }, 1000)
        })
        console.log(result)

    }
    console.log("end")
}

test();