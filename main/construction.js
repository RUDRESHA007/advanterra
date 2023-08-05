let symbole = document.querySelector(".times")
let timesnav = document.querySelector(".timesnav")
let nav = document.querySelector(".navbar-data")
// console.log(sym)


symbole.addEventListener("click",() =>{
    nav.style.right='0vw'
    console.log('hi1')
    timesnav.style.display='block'
    nav.style.display='flex'
})

timesnav.addEventListener("click",() =>{
    nav.style.right='-200vw'
    console.log('hi2')
    timesnav.style.display='none'
})


const home=document.querySelectorAll('.home');
console.log(home)

for(i=0;i<home.length;i++){
    home[i].addEventListener('click',function(){
        nav.style.right='-200vw'
    })
}

