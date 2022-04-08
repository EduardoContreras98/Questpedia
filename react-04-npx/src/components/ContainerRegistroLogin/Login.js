// document.getElementById("S_menu").addEventListener("click", Jssubmenu);
document.getElementById("btnReg").addEventListener("click", register);
document.getElementById("btnLog").addEventListener("click", IniciarSesion);

window.addEventListener("resize", anchoPage);
window.addEventListener("resize",  IniciarSesion);

/**/
var Container_form = document.querySelector(".containerLogReg");
var Formulario_log = document.querySelector(".Formlog");
var Formulario_Reg = document.querySelector(".FormReg");
var Back_log = document.querySelector(".Cajalogin");
var Back_Reg = document.querySelector(".CajaRegister");

function anchoPage(){
    if(window.innerWidth > 850){
        Back_Reg.style.display = "block";
        Back_log.style.display = "block";
    }
    else{
        Back_Reg.style.display = "block";
        Back_Reg.style.opacity = "1";
        Back_log.style.display = "none";
        Formulario_log.style.display = "block";
        Formulario_Reg.style.display = "none";
        Container_form.style.left = "0px";
    }
}

anchoPage();

function IniciarSesion(){
    if(window.innerWidth > 850){
        Formulario_Reg.style.display = "none";
        Container_form.style.left = "240px";
        Formulario_log.style.display = "block";
        Back_Reg.style.opacity = "1";
        Back_log.style.opacity = "0";
    }
    else{
        Formulario_Reg.style.display = "none";
        Container_form.style.left = "0px";
        Formulario_log.style.display = "block";
        Back_Reg.style.display = "block";
        Back_log.style.display = "none";
    }
}

function register(){
    if(window.innerWidth > 850){
        Formulario_Reg.style.display = "block";
        Container_form.style.left = "680px";
        Formulario_log.style.display = "none";
        Back_Reg.style.opacity = "0";
        Back_log.style.opacity = "1";
    }
    else{
        Formulario_Reg.style.display = "block";
        Container_form.style.left = "0px";
        Formulario_log.style.display = "none";
        Back_Reg.style.display = "none";
        Back_log.style.display = "block";
        Back_log.style.opacity = "1";
    }
}

// $(".sub-menu ul").hide();
// $(".profile-reviewtab").hide();
// $(".profile-Posttab").hide();

// function Jssubmenu(){
//       $(this).parent(".sub-menu").children("ul").slideToggle("200");
//       $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");
// }

// function menuToggle(){
//       const toggleMenu = document.querySelector(".Umenu");
//       toggleMenu.classList.toggle("active")
// }

// Submenu
// var Submenu = document.querySelector(".sub-menu");

