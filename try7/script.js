async function getData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data done")
        },3000)

    });
};


async function main(){
    console.log("getting data please wait....")
    let a = await getData()
    console.log(a)
    console.log("processed!")
}

main();
