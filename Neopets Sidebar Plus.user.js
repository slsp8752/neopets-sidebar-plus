// ==UserScript==
// @name         Neopets Sidebar Plus
// @namespace    NA
// @version      0.1
// @description  A pet swapping machine!
// @author       neocrunched
// @include        http://www.neopets.com/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var petNum = 1;
var petOne = "";
var petTwo = "";
var petThree = "";
var petFour = "";
var petFive = "";

var elmImageNew;
var sPet;
var initial = true;

document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[1].innerHTML = document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[1].innerHTML.replace(/yellow/,"orange");

GM_xmlhttpRequest({
  method: "GET",
  url: "http://www.neopets.com/quickref.phtml",
  onload: function(response) {
      
      function swapPets(pet){


var q = document.evaluate(
		"//img[contains(@src, 'cp')]", document, null,
		XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    //alert(elmProductImage);
    var elmProductImage = q.snapshotItem(petNum);


switch (pet) {
    case 1: sPet = petOne; break;
    case 2: sPet = petTwo; break;
    case 3: sPet = petThree; break;
    case 4: sPet = petFour; break;
    case 5: sPet = petFive; break;
    default: return;
        }
    
if(currentPet == sPet) return;
if (!elmProductImage) return;

var name = document.body.getElementsByClassName("sidebarHeader medText")[0].innerHTML.replace(currentPet, sPet);
document.body.getElementsByClassName("sidebarHeader medText")[0].innerHTML = name;     

var details = doc.getElementById(sPet+"_details").getElementsByClassName("sf");
var species = details[1].getElementsByTagName("b")[0].innerHTML;
var health = details[11].innerHTML.replace(/yellow/,"orange");
          //alert(health);
          //alert(document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[1].innerHTML);
var mood = details[13].getElementsByTagName("b")[0].innerHTML;
var hunger = details[15].getElementsByTagName("b")[0].innerHTML;
var age = details[7].innerHTML.replace(/<b>/,"").replace(/<\/b>/,"");
var level = details[9].getElementsByTagName("b")[0].innerHTML;
          
document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[0].innerHTML = document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[0].innerHTML.replace(/.+/,species);
document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[1].innerHTML = document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[1].innerHTML.replace(/.+/,health);
document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[3].innerHTML = document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[3].innerHTML.replace(/.+/,mood);
document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[4].innerHTML = document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[4].innerHTML.replace(/.+/,hunger);
document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[5].innerHTML = document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[5].innerHTML.replace(/.+/,age);
document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[6].innerHTML = document.body.getElementsByClassName("activePetInfo")[0].getElementsByTagName("b")[6].innerHTML.replace(/.+/,level);

          
var petimage3 = doc.getElementById(sPet + "_thumb").style.backgroundImage.replace(/url\(/,"").replace(/\)/,"").replace(/1.png/,"2.png");
currentPet = sPet;
var elmParent = elmProductImage.parentNode;
	while (elmParent && (elmParent.nodeName != 'BODY')) {
	    elmParent = elmParent.parentNode;
    }

        var imagethebest = document.createElement('img');
        imagethebest.src = petimage3;
        elmProductImage.parentNode.replaceChild(imagethebest, elmProductImage);

}
      
      
    var testytest = response.responseText;
    var doc = document.implementation.createHTMLDocument("");
    doc.open();
	doc.write(testytest);
	doc.close();
    
    petOne = doc.getElementsByClassName('active_pet')[0].innerHTML.match(/\w+_thumb/g)[0].replace(/_thumb/,"");
      if (doc.getElementsByClassName('inactive_pet')[0] !== undefined){
          petNum++;
          petTwo = doc.getElementsByClassName('inactive_pet')[0].innerHTML.match(/\w+_thumb/g)[0].replace(/_thumb/,"");}
      if (doc.getElementsByClassName('inactive_pet')[1] !== undefined){
          petNum++;
          petThree = doc.getElementsByClassName('inactive_pet')[1].innerHTML.match(/\w+_thumb/g)[0].replace(/_thumb/,"");}
      if (doc.getElementsByClassName('inactive_pet')[2] !== undefined){
          petNum++;
          petFour = doc.getElementsByClassName('inactive_pet')[2].innerHTML.match(/\w+_thumb/g)[0].replace(/_thumb/,"");}
      if (doc.getElementsByClassName('inactive_pet')[3] !== undefined){
          petNum++;
          petFive = doc.getElementsByClassName('inactive_pet')[3].innerHTML.match(/\w+_thumb/g)[0].replace(/_thumb/,"");}
	
      var currentPet = petOne;
      
	if(petOne !== ""){
		var imageurl = doc.getElementById(petOne + "_thumb").style.backgroundImage;
        var img = new Image();
		img.src = imageurl.substring(4, imageurl.length-1);
		img.onclick = function(){swapPets(1);}
		img.setAttribute("style", "position:relative;bottom:2px;width:28px;height:auto;");
		var y = document.getElementsByClassName('sidebarModule');
		var petOneSmall = y[0];
		petOneSmall.parentNode.insertBefore(img, petOneSmall);
    	}
	
  	if(petTwo !== ""){
		var imageurl = doc.getElementById(petTwo + "_thumb").style.backgroundImage;
        var img = new Image();
		img.src = imageurl.substring(4, imageurl.length-1);
		img.onclick = function(){swapPets(2);}
		img.setAttribute("style", "position:relative;bottom:2px;width:28px;height:auto;");
		var y = document.getElementsByClassName('sidebarModule');
		var petTwoSmall = y[0];
		petTwoSmall.parentNode.insertBefore(img, petTwoSmall);  
		}

	if(petThree !== ""){
        var imageurl = doc.getElementById(petThree+ "_thumb").style.backgroundImage;
		var img = new Image();
		img.src = imageurl.substring(4, imageurl.length-1);
		img.onclick = function(){swapPets(3);}
		img.setAttribute("style", "position:relative;bottom:2px;width:28px;height:auto;");
		var y = document.getElementsByClassName('sidebarModule');
		var petThreeSmall = y[0];
		petThreeSmall.parentNode.insertBefore(img, petThreeSmall);
		}

	if (petFour !== ""){
        var imageurl = doc.getElementById(petFour + "_thumb").style.backgroundImage;
		var img = new Image();
		img.src = imageurl.substring(4, imageurl.length-1);
		img.onclick = function(){swapPets(4);}
		img.setAttribute("style", "position:relative;bottom:2px;width:28px;height:auto;");
		var y = document.getElementsByClassName('sidebarModule');
		var petFourSmall = y[0];
		petFourSmall.parentNode.insertBefore(img, petFourSmall); 
		}

	if (petFive !== ""){
        var imageurl = doc.getElementById(petFive + "_thumb").style.backgroundImage;
		var img = new Image();
		img.src = imageurl.substring(4, imageurl.length-1);
		img.onclick = function(){swapPets(5);}
		img.setAttribute("style", "position:relative;bottom:2px;width:28px;height:auto;");
		var y = document.getElementsByClassName('sidebarModule');
		var petFiveSmall = y[0];
		petFiveSmall.parentNode.insertBefore(img, petFiveSmall);
		}    

  }
});
