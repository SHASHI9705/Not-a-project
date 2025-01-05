console.log("I am here");

let prom1 = new Promise((resolve,reject)=>{
    let a =Math.random()
    if (a>0.5){
        reject("i am not done yet!")
    }
    else{
        resolve("i am done today!!!")
    }
})

prom1.then((e)=>{
    console.log(e)
}).catch((x)=>{
    console.log(x)
});

