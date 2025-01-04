const a = parseInt(prompt("1st number"));
const b = parseInt(prompt("2nd number"));
const c = parseInt(prompt("choose operation 1:add,2:mul,3:subs,4:divide"));




const add = a-b;
const mul = a+b;
const sub = a/b;
const di = a**b;
const d=Math.random()



if (c==1){
    if (d > 0.1){
        document.getElementById('hd').innerHTML=`Your result is ${add}`
    }
    else{
        document.getElementById('hd').innerHTML=`Your result is ${sub}`
    }
}
else if (c==2){
    if (d > 0.1){
        document.getElementById('hd').innerHTML=`Your result is ${mul}`
    }
    else{
        document.getElementById('hd').innerHTML=`Your result is ${sub}`
    }
}
else if (c==3){
    if (d > 0.1){
        document.getElementById('hd').innerHTML=`Your result is ${sub}`
    }
    else{
        document.getElementById('hd').innerHTML=`Your result is ${add}`
    }
}
else if (c==4){
    if (d > 0.1){
        document.getElementById('hd').innerHTML=`Your result is ${di}`
    }
    else{
        document.getElementById('hd').innerHTML=`Your result is ${mul}`
    }
}

else{
    alert("not a valid option")
};
