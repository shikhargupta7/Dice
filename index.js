var n=Math.random();
var randGen=(Math.floor(n*6))+1;

 var randImg= "dice" + randGen + ".png";
 var imgsrce= "images/" + randImg;
var mainImg = document.querySelectorAll("img")[0];
mainImg.setAttribute("src", imgsrce);


var n=Math.random();
var randGen1=(Math.floor(n*6))+1;
var randImg= "dice" + randGen1 + ".png";
var imgsrce= "images/" + randImg;
var mainImg2 = document.querySelectorAll("img")[1];
mainImg2.setAttribute("src",imgsrce);

if(randGen > randGen1){
document.querySelector(".container h1").innerHTML ="Player 1 Wins!!";
}
else if(randGen < randGen1){
  document.querySelector("h1").innerHTML= "Player 2 Wins!!";
}
else{
  document.querySelector("h1").innerHTML="It's a draw";
}
