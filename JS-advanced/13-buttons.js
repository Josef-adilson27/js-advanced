const nav = document.querySelector('.app')

let prev = null;

nav.addEventListener('click',(event)=>{
    if (prev) prev.innerText = event.target.innerText;
    event.target.innerText = 'Нажата'
    prev = event.target;
    nav.nextElementSibling.innerText =  Number(nav.nextElementSibling.innerText) + 1
})