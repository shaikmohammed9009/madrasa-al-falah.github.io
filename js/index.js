let menu =document.querySelector("#menu")

let Nav = document.querySelector("ul")

menu.onclick=()=>{
    menu.classList.toggle("fa-xmark")
    Nav.classList.toggle("active")
}

window.onscroll=()=>{
    menu.classList.remove("fa-xmark")
    Nav.classList.remove("active")
}

// let btn=document.querySelector(".play")
// btn.onclick=()=>{
//     btn.classList.add("active_btn")
// }


