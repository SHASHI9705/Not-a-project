const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');

box1.addEventListener("click",()=>{
    if ( (box2.style.background="blue") || (box2.style.background="red")){
        box2.style.background="white";
        setInterval(()=>{
            box1.style.background="blue"
        
        },1000);
        setInterval(()=>{
            box1.style.background="red"
        
        },2000);

    }else{
        setInterval(()=>{
            box1.style.background="blue"
        
        },1000);
        setInterval(()=>{
            box1.style.background="red"
        
        },2000);
    }

});


box2.addEventListener("click",()=>{
    if ( (box1.style.background="blue") || (box1.style.background="red")){
        box1.style.background="white";
        setInterval(()=>{
            box2.style.background="blue"
        
        },1000);
        setInterval(()=>{
            box2.style.background="red"
        
        },2000);

    }else{
        setInterval(()=>{
            box2.style.background="blue"
        
        },1000);
        setInterval(()=>{
            box2.style.background="red"
        
        },2000);
    }

});

 


