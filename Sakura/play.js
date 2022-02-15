window.onload = function(){
    var icon = document.getElementById("arrow");
    var nav = document.getElementById("nav");

    icon.onclick = function(){
        if(nav.style.display == "none"){
            icon.style.transform = "rotate(180deg)";
            nav.style.display = "flex";
        }
        else{
            icon.style.transform = "rotate(90deg)";
            nav.style.display = "none";
        }
    };
}