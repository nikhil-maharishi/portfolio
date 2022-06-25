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
},200)
}
})
function fn1()
{
    var str=document.getElementById('firstName').value;
    alert("Thank You")
}
function fn1()
{
    var str=document.getElementById('lastnane').value;
    alert("Thank You")
}
function fn1()
{
    var str=document.getElementById('email').value;
    alert("Thank You")
}
function fn1()
{
    var str=document.getElementById('message').value;
    alert("Thank You")
}