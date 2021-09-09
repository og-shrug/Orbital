mainLogo = document.getElementById("mainLogo");
isSearchActive = false;
searchBar = document.getElementById("searchbar")
searchSel = document.getElementById("searchSelect");

alert("Orbital is still in its development stage.")

if(localStorage.getItem("isLoggedIn") == "true"){

}

function removeStuff(){
    isSearchActive=true;
    mainLogo.style.display = "none";
    document.getElementById("homeI").style.display = "none";
    searchBar.style.width="1200px";
    searchBar.style.marginLeft = "100px";
    

    document.getElementById("searchSelect").style.display = "inline-block";
    document.querySelector("#sideNavBtn").style.marginLeft = "30px";
    document.querySelector("#sideNavBtn").style.marginTop = "20px";
    document.getElementById("signUpBtn").style.marginLeft = "1000%";
    mainLogo.style.color = "white";
    mainLogo.style.fontSize = "30px";
}
function bringItback(){
    
    mainLogo.style.display = "flex";
    
    document.getElementById("mainNav").style.display = "";
    document.getElementById("signUpBtn").style.marginLeft = "2800%";
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

document.getElementById("searchBtn").onclick = function(){ 
    
    
    const settings = {
        headers :{'Authorization': 'Bearer ' + "BQClytW0ApCqvythl6PB14i_9f7tVF6evqm0g35sGWpoMPwo0Ns7K4Xaj-y1B2xt6SNsDFIpeOOtEMfsZ1fJQTFYCKhSvjJZmTAZOUrc45uL2LajXpUU8VZy9rdABPebgse-wQqPzgChuD75252SETJA8exiawA"}
    }

    fetch(`https://api.spotify.com/v1/search?q=${searchBar.value}&type=${searchSel.value}&limit=${20}`,settings)
        .then(response => response.json())

        .then(data => {
            listoftracks = (data['tracks']['items'])
            console.log(data);

            
            heading = document.createElement('h2');
            heading.className = "searchRes"
            heading.innerHTML= `Search results for '${searchBar.value}'`;
            
            document.body.appendChild(heading);
           

            

            console.log(document.getElementsByClassName("trackDiv").length,"length")
 
            for(n=0;n<document.getElementsByClassName("trackDiv").length;n++){
                try{
                    document.getElementsByClassName("searchRes")[0].style.display = "none";
                    
                    
                    

                }
                catch(err){

                }
            }
            

            
            for(i=0;i<listoftracks.length;i++){
               
                
                trackDiv = document.createElement("div");
                trackDiv.className = "trackDiv";

                
                trackTitle = document.createElement("h3");
                trackTitle.style.color = "white";
                trackTitle.innerHTML = (listoftracks[i]['album']['name']);
                console.log(listoftracks[i]['album']['name']);

                trackimg = document.createElement("img");
                trackimg.src = (listoftracks[i]['album']['images'][0]['url']);


                
                trackDiv.appendChild(trackimg);
                trackDiv.appendChild(trackTitle);
                document.body.appendChild(trackDiv);
            }
        });
}