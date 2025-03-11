// function animator(classValue){
//     var title = document.getElementById("title")
//     title.className = classValue;
//     // alert(classValue)
//     setTimeout(() => {
//         title.className = "";
//     }, 1000);
// }

var title = document.getElementById("title");
var para = document.getElementById("para");
var btn = document.getElementsByClassName("menu")
title.className = "animate__animated animate__zoomInDown";
const delayPara = () => {
    para.className = "animate__animated animate__zoomInDown";
    para.style.visibility = "visible"
}
setTimeout(() => {
    delayPara()
}, 400);
// classValue = btn.value;
for(var i=0; i<btn.length; i++){
    btn[i].onclick= function(){
        // alert()
        title.className= this.value;    
        setTimeout(() => {
            title.className="";
        }, 1000);
    }
}

var btn = document.getElementById("btn")
btn.onclick= function(){
    var icon = document.getElementById("icon2")
    var title = document.getElementById("title")
    var link = document.getElementsByClassName("link")
    var para = document.getElementById("para")
    var footer = document.getElementById("footer")
    var mainPage = document.getElementById("main-page")
    var aside = document.getElementById("aside")
    var button = document.getElementsByTagName("button")
    var menu = document.getElementsByClassName("menu")

    if (icon.className!="fa-solid fa-toggle-off") {
        icon.className="fa-solid fa-toggle-off"
        mainPage.style.backgroundColor="#111111"
        aside.style.backgroundColor="#15151D"
        aside.style.color="white"
        title.style.color="#4672FE"
        para.style.color="white"
        footer.style.color="white"
        for (let i = 0; i < button.length; i++) {
            button[i].style.color="white";
        }
        for (let i = 0; i < link.length; i++) {
            link[i].style.color="#4672FE";
        }
        
    }else{
        icon.className="fa-solid fa-toggle-on"
        mainPage.style.backgroundColor="";
        aside.style.backgroundColor="";
        aside.style.color="";
        title.style.color="";
        para.style.color="";
        footer.style.color=""
        for (let i = 0; i < button.length; i++) {
        button[i].style.color="black";
        }
        for (let i = 0; i < link.length; i++) {
            link[i].style.color="";
        }
        
    }
}

// function darkMode(){
    
// }