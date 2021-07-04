var burger = document.querySelector('.burger')
console.log(burger)
var links = document.querySelector('.side-bar')
console.log(links)

burger.addEventListener('click',function(){
    links.classList.toggle('left')
    burger.classList.toggle("is-active")
})