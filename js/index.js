


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
let btn=document.querySelector(".btn")
let home=document.querySelector(".home")
let clip = document.querySelector(".clip")
let remove_all = document.querySelector(".rmdata")
btn.onclick=function(){
    btn.classList.add("active_btn")
    clip.classList.add("active_btn")
    home.classList.add("active_home")
}
remove_all.onclick=()=>{
    btn.classList.remove("active_btn")
    clip.classList.remove("active_btn")
    home.classList.remove("active_home")
}

// $(document).ready(()=>{
//     $(".event").magnificPopup({
      
//         mainClass: 'a',
       
//       type:"image",
     
//       gallery:{
//           enabled:true
//       }
      
//     })
   
// });






