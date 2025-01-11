var back_vocaloid=document.getElementById("back_m");
var img_vocaloid=document.getElementById("imgee");
var vocaloid_color_text=document.getElementById("col");
var vocaloid_color_menu=document.getElementById("col_menu");
var vocaloid_color_welcome=document.getElementById("txt_col");
var vocaloid_color_body=document.getElementById("body");
var vocaloid_color_option=document.getElementsByClassName("option");
var vocaloid_background_image=document.getElementById("backk");

//len&rin
var rin = document.getElementById("rin");
var back_rin=document.getElementById("back_m");
rin.addEventListener("click",function(){
    //image back
    back_rin.style.backgroundColor = " rgb(255, 237, 71)";
    back_rin.style.position="relative";
    back_rin.style.bottom="390.5vh";
    //background
    vocaloid_background_image.src="assets/rin.jpg";
    vocaloid_background_image.style.right="10vw";
    vocaloid_background_image.style.width="120%";
    vocaloid_background_image.style.height="120%";
    vocaloid_background_image.style.bottom="257vh";
    //img
    img_vocaloid.src="assets/rin.png";
    img_vocaloid.style.position="relative";
    img_vocaloid.style.height="45%";
    img_vocaloid.style.width="45%";
    img_vocaloid.style.left="53vw";
    img_vocaloid.style.bottom="55vw";
    //top bar
    vocaloid_color_text.style.backgroundColor="rgb(255, 237, 71";
    //welcome
    vocaloid_color_welcome.style.color="rgb(255, 255, 255)";
    vocaloid_color_welcome.style.backgroundColor="rgb(255, 237, 71)";
    //center menu
    vocaloid_color_menu.style.backgroundColor="rgb(255, 237, 71";
    vocaloid_color_menu.style.color="rgb(255, 237, 71";
    //background dasar
    vocaloid_color_body.style.background="linear-gradient(to bottom,rgb(255, 255, 230),rgb(255, 237, 71) 100%)";
    //option padding
    vocaloid_color_option[0].style.backgroundColor=" rgb(255, 255, 230)";
    vocaloid_color_option[1].style.backgroundColor=" rgb(255, 255, 230)";
    vocaloid_color_option[2].style.backgroundColor=" rgb(255, 255, 230)";
    vocaloid_color_option[3].style.backgroundColor=" rgb(255, 255, 230)";
    vocaloid_color_option[4].style.backgroundColor=" rgb(255, 255, 230)";
    //text color
    vocaloid_color_option[0].style.color=" rgb(255, 237, 71";
    vocaloid_color_option[1].style.color=" rgb(255, 237, 71";
    vocaloid_color_option[2].style.color=" rgb(255, 237, 71";
    vocaloid_color_option[3].style.color=" rgb(255, 237, 71";
    vocaloid_color_option[4].style.color=" rgb(255, 237, 71";

});

