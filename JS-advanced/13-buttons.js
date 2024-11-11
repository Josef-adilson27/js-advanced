const nav = document.querySelector('.app')

let prev = null;

nav.addEventListener('click',({target})=>{
    if(target.tagName=='BUTTON'){
        if (prev) prev.innerText = target.innerText;
        target.innerText = 'Нажата'
        prev = target;
        nav.nextElementSibling.innerText =  Number(nav.nextElementSibling.innerText) + 1
    }
})