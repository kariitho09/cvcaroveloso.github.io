const MENU=document.querySelector(".MENU");
const menu= document.querySelector("menu-navegacion");

console.log(menu)
console.log(MENU)

MENU.addEventListener("click", ()=>{
    menu.classList.toggle("spread")
})


window.addEventListener("click",e=>{
   if(menu.classList.contains("spread")
   && e.target != menu && e.target != MENU ){
    menu.classList.toggle("spread")
   }
})
