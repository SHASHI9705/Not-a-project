function createCard(){
    const title=prompt("write the title of card:");
    const cName=prompt("write the channel name of card:");
    let views=parseInt(prompt("write the views of card:"));
    const monthsOld=prompt("how many months old:?");
    const duration=prompt("write the duration of card:");
    const thumbnail=prompt("write the url of thumbnail of card:");
    if (views>1000){
        views=views/1000
    }

    document.querySelector('.hd').innerHTML=`${title}`
    document.querySelector('.channelname').innerHTML=`${cName}`
    document.querySelector('.views').innerText=`${views}k views`
    document.querySelector('.time').innerHTML=`${duration}`
    document.querySelector('.oldtime').innerHTML=`${monthsOld} months ago`
    document.getElementById('thumbnail').style.backgroundImage=`url('${thumbnail}')`

}

createCard();
