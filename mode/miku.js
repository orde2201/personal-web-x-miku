var back_vocaloid=document.getElementById("back_m");
var img_vocaloid=document.getElementById("imgee");
var vocaloid_color_text=document.getElementById("col");
var vocaloid_color_menu=document.getElementById("col_menu");
var vocaloid_color_welcome=document.getElementById("txt_col");
var vocaloid_color_body=document.getElementById("body");
var vocaloid_color_option=document.getElementsByClassName("option");
var vocaloid_background_image=document.getElementById("backk");

var miku = document.getElementById("mikuuu");
var back_miku=document.getElementById("back_m");
miku.addEventListener("click",function(){
    //image back
    back_miku.style.backgroundColor = " rgb(50, 235, 235)";
    back_miku.style.left="100.5vh";
    back_miku.style.bottom="230vw";
    //img
    img_vocaloid.src="assets/miku.png";
    img_vocaloid.style.height="60%";
    img_vocaloid.style.width="60%";
    img_vocaloid.style.left="46vw";
    img_vocaloid.style.bottom="55vw";
    //top bar
    vocaloid_color_text.style.backgroundColor="rgb(50, 235, 235)";
    //backround image
    vocaloid_background_image.src="assets/background_miku.jpg";
    vocaloid_background_image.style.bottom="280vh";
    //welcome
    vocaloid_color_welcome.style.color="rgb(255, 255, 255)";
    vocaloid_color_welcome.style.backgroundColor="rgb(50, 235, 235)";
    //center menu
    vocaloid_color_menu.style.backgroundColor="rgb(50, 235, 235)";
    vocaloid_color_menu.style.color="rgb(50, 235, 235)";
    //background dasar
    vocaloid_color_body.style.background="linear-gradient(to bottom,rgb(255, 255, 255),rgb(255, 237, 71) 100%)";
    //option padding
    vocaloid_color_option[0].style.backgroundColor=" rgb(255, 255, 230)";
    vocaloid_color_option[1].style.backgroundColor=" rgb(255, 255, 230)";
    vocaloid_color_option[2].style.backgroundColor=" rgb(255, 255, 230)";
    vocaloid_color_option[3].style.backgroundColor=" rgb(255, 255, 230)";
    vocaloid_color_option[4].style.backgroundColor=" rgb(255, 255, 230)";
    //text color
    vocaloid_color_option[0].style.color=" rgb(50, 235, 235)";
    vocaloid_color_option[1].style.color=" rgb(50, 235, 235)";
    vocaloid_color_option[2].style.color=" rgb(50, 235, 235)";
    vocaloid_color_option[3].style.color=" rgb(50, 235, 235)";
    vocaloid_color_option[4].style.color=" rgb(50, 235, 235)";
    
});