document.getElementById("S_menu").addEventListener("click", Jssubmenu);
document.getElementById("U_menu").addEventListener("click", menuToggle);

$(".sub-menu ul").hide();
$(".profile-reviewtab").hide();
$(".profile-Posttab").hide();

function Jssubmenu(){
      $(this).parent(".sub-menu").children("ul").slideToggle("200");
      $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");
}

function menuToggle(){
      const toggleMenu = document.querySelector(".Umenu");
      toggleMenu.classList.toggle("active")
}