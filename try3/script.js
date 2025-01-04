function randomColor(){
    let c1=Math.ceil(Math.random() * 256);
    let c2=Math.ceil(Math.random() * 256);
    let c3=Math.ceil(Math.random() * 256);
    return `rgb(${c1}, ${c2}, ${c3})`
};

let boxes = document.querySelector('.container').children;


Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=randomColor()
    e.style.color=randomColor()

});
