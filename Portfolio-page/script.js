
let menu = document.querySelector("#nav-part-2 i")
let fullNav = document.querySelector("#full-scr-nav")
let nav = document.querySelector("#nav")
let light = document.querySelector("#nav-part-2 #light")


let flag = 0;
menu.addEventListener("click", function(){
    if(flag == 0){
        fullNav.style.top = "0%";
        nav.style.color = "#ededed";
        nav.style.background = "transparent";
        nav.style.borderRadius = "0px";
        nav.style.backdropFilter = "none";
        nav.style.border = "none";
        flag++;
    }else{
        fullNav.style.top = "-100%";
        nav.style.color = "#141414";
        nav.style.background = "rgba(255, 255, 255, 0.2)";
        nav.style.borderRadius = "10px";
        nav.style.backdropFilter = "15px";
        nav.style.border = "1px solid rgba(255, 255, 255, 0.3)";
        flag--;
    }
})