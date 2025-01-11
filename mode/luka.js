var img_vocaloid=document.getElementById("imgee");
var vocaloid_color_text=document.getElementById("col");
var vocaloid_color_menu=document.getElementById("col_menu");
var vocaloid_color_welcome=document.getElementById("txt_col");
var vocaloid_color_body=document.getElementById("body");
var vocaloid_color_option=document.getElementsByClassName("option");
var vocaloid_background_image=document.getElementById("backk");

//luka
var luka = document.getElementById("lukaa");
var back_luka=document.getElementById("back_m");
luka.addEventListener("click",function(){
    //image back
    back_luka.style.backgroundColor = "rgb(241, 181, 191)";
    back_luka.style.bottom="350.5vh";
    back_luka.style.left="100vh";
    
    //img
    img_vocaloid.src="assets/LUKA.png";
    img_vocaloid.style.height="60%";
    img_vocaloid.style.width="60%";
    img_vocaloid.style.left="47vw";
    img_vocaloid.style.bottom="56vw";
  
    //back img
    vocaloid_background_image.src="assets/background_luka.png";
    vocaloid_background_image.style.bottom="250vh";
    //top bar
    vocaloid_color_text.style.backgroundColor="rgb(255, 192, 203)";
    //welcome
    vocaloid_color_welcome.style.color=" rgb(255, 255, 255)";
    vocaloid_color_welcome.style.backgroundColor="rgb(255, 192, 203)";
    //center menu
    vocaloid_color_menu.style.backgroundColor=" rgb(255, 192, 203)";
    vocaloid_color_menu.style.color=" rgb(255, 192, 203)";
    //background dasar
    vocaloid_color_body.style.background="linear-gradient(to bottom,rgb(255, 255, 255),rgb(252, 232, 51) 100%)";
    //option padding
    vocaloid_color_option[0].style.backgroundColor=" rgb(255, 255, 255)";
    vocaloid_color_option[1].style.backgroundColor="rgb(255, 255, 255)";
    vocaloid_color_option[2].style.backgroundColor=" rgb(255, 255, 255)";
    vocaloid_color_option[3].style.backgroundColor=" rgb(255, 255, 255)";
    vocaloid_color_option[4].style.backgroundColor=" rgb(255, 255, 255)";
    //text color
    vocaloid_color_option[0].style.color=" rgb(255, 192, 203)";
    vocaloid_color_option[1].style.color=" rgb(255, 192, 203)";
    vocaloid_color_option[2].style.color=" rgb(255, 192, 203)";
    vocaloid_color_option[3].style.color=" rgb(255, 192, 203)";
    vocaloid_color_option[4].style.color=" rgb(255, 192, 203)";


     
});


