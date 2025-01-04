const a = Math.floor(Math.random() * 10);
const b = "Crazy";
const c = "Amazing";
const d = "Fire";

const e = "Engine";
const f = "Foods";
const g = "Garments";

const h = "Bros";
const i = "Limited";
const j = "Hub";


if (a<=1){
    document.getElementById('hd').innerHTML=`${b}${f}${j}`;
}
if (a==2){
    document.getElementById('hd').innerHTML=`${c}${g}${h}`;
}
if (a==3){
    document.getElementById('hd').innerHTML=`${d}${e}${i}`;
}
if (a==4){
    document.getElementById('hd').innerHTML=`${b}${g}${j}`;
}
if (a==5){
    document.getElementById('hd').innerHTML=`${c}${g}${i}`;
}
if (a==6){
    document.getElementById('hd').innerHTML=`${d}${g}${i}`;
}
if (a==7){
    document.getElementById('hd').innerHTML=`${b}${f}${h}`;
}
if (a==8){
    document.getElementById('hd').innerHTML=`${c}${f}${h}`;
}
if (a==9){
    document.getElementById('hd').innerHTML=`${c}${e}${i}`;
}

console.log(a);