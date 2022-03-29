const img1 = document.getElementById("imgp");

const defaultBTn = document.getElementById("default-btn");

document.getElementById("S_menu").addEventListener("click", Jssubmenu);
document.getElementById("U_menu").addEventListener("click", menuToggle);
document.getElementById("nav-user1").addEventListener("click", TABS1);
document.getElementById("nav-user2").addEventListener("click", TABS2);
document.getElementById("nav-user3").addEventListener("click", TABS3);
document.getElementById("EditP").addEventListener("click", TABS4);

document.getElementById("ch-img").addEventListener("click", DefaultBtnActive1);

$(".sub-menu ul").hide();

$(".profile-Posttab").show();
$(".profile-reviewtab").hide();
$(".profile-Fav").hide();
$(".profile-Edit").hide();

function Jssubmenu(){
      $(this).parent(".sub-menu").children("ul").slideToggle("200");
      $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");
}

function menuToggle(){
      const toggleMenu = document.querySelector(".Umenu");
      toggleMenu.classList.toggle("active")
}


function TABS1(){
      $(".profile-posttab").show();
      $(".profile-reviewtab").hide();
      $(".profile-Fav").hide();
      $(".profile-Edit").hide();
}
  
function TABS2(){
      $(".profile-posttab").hide();
      $(".profile-reviewtab").show();
      $(".profile-Fav").hide();
      $(".profile-Edit").hide();
}
  
function TABS3(){
      $(".profile-posttab").hide();
      $(".profile-reviewtab").hide();
      $(".profile-Fav").show();
      $(".profile-Edit").hide();
}

function TABS4(){
    $(".profile-posttab").hide();
    $(".profile-reviewtab").hide();
    $(".profile-Fav").hide();
    $(".profile-Edit").show();
}

function DefaultBtnActive1(){
    defaultBTn.click();


    defaultBTn.addEventListener("change",function(){
          const file = this.files[0];
          if(file){
                const reader1 = new FileReader()
                reader1.onload = function(){
                      const result = reader1.result;
                      img1.src = result;
                }
                reader1.readAsDataURL(file);
          }

    });
}