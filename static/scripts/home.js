mainLogo = document.getElementById("mainLogo");

if(localStorage.getItem("isLoggedIn") == "true"){

}

function removeLogo(){
    document.getElementById("logo").style.display = "none";
    document.getElementById("head").style.display = "none";


    mainLogo.innerHTML = "<i class='fa fa-bars' id='sideNavBtn'></i>"
    document.querySelector("#sideNavBtn").style.marginLeft = "30px";
    document.querySelector("#sideNavBtn").style.marginTop = "20px";
    mainLogo.style.color = "white";
    mainLogo.style.fontSize = "30px";
}
function bringItback(){
    document.getElementById("mainLogo").style.display = "flex";
    document.getElementById("logo").style.display = "";
    document.getElementById("head").style.display = "";

    mainLogo.innerHTML = " <input id='searchbar' onfocus='removeLogo()' onblur='bringItback()' placeholder='Search for anything' required/><button id='searchBtn'><i id='searchIco' class='fa fa-search'></i></button>"
    mainLogo.style.color = "#84DCC6";
    mainLogo.style.fontSize = "30px";
}

function openNav() {
    
     
    document.getElementById("SideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgb(1,1,1)";
    
}
  
function closeNav() {
    
    document.getElementById("SideNav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.body.style.backgroundColor = "rgb(12,12,12)";
    
}