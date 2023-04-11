document.querySelector('.cross').style.display='none';

document.querySelector('.hamburger').addEventListener
("click",()=>{document.querySelector('.sidebar').classList.toggle('sidebarGo')
if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.ham').style.display='inline'
    document.querySelector('.cross').style.display='none'
}
else{
    document.querySelector('.cross').style.display='inline'
    setTimeout(()=>{
    document.querySelector('.ham').style.display='none'
},100)
}
})

function fn2()
{
    
    alert("Comming Soon");
}

let icon = document.getElementById('img');
icon.addEventListener("click",(e)=>{
    console.log('j');
    document.querySelector('.popup').classList.add('open-popup')
})

let close = document.getElementById('closebtn');
close.addEventListener("click",(e)=>{
    console.log('h');
    document.querySelector('.popup').classList.remove('open-popup');
})



