const defaultBTn = document.getElementById("default-btn");
const defaultBTn4 = document.getElementById("default-btn2");
const img1 = document.getElementById("img1");
const FileName1 = document.querySelector(".file-name1");

const vid = document.getElementById("UVideo");

document.getElementById("S_menu").addEventListener("click", Jssubmenu);
document.getElementById("U_menu").addEventListener("click", menuToggle);
document.getElementById("custom-btn1").addEventListener("click", DefaultBtnActive1);

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

function Irlsliode(){

    document.getElementById("TexVid").style.display= "flex";

}

function vidBtnActive(){
    var str = document.getElementById("goUrl").value;
    vid.src = str;

    alert(str);
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
                      img1.style.visibility = 'visible';
                      alert(result);
                }
                reader1.readAsDataURL(file);
          }
          if(this.value){
                let valueStore = this.value;
                fileName1.textContent = valueStore;
          }
    });
}

function DefaultBtnActiveVid(){
    defaultBTn4.click();

    defaultBTn4.addEventListener("change",function(){
          const file = this.files[0];
          if(file){
                const reader4 = new FileReader()
                reader4.onload = function(){
                      const result = reader4.result;
                      vid.src = result;
                      alert(result);
                }
                reader4.readAsDataURL(file);

          }
    });
   
    
}


//b  TexVid
