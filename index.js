// var randomNumber1 = Math.floor((Math.random()*7));
// var randomNumber2 = Math.floor((Math.random()*7)); 

// if(randomNumber1 == 1){
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }else if(randomNumber1 == 2){
//     document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber1 == 3){
//     document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber1 == 4){
//     document.querySelector(".img1").setAttribute("src","images/dice4.png");

// }else if(randomNumber1 == 5){
//     document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }else{
//     document.querySelector(".img1").setAttribute("src","images/dice6.png");
// };

// if(randomNumber2 == 1){
//     document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }else if(randomNumber2 == 2){
//     document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber2 == 3){
//     document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber2 == 4){
//     document.querySelector(".img2").setAttribute("src","images/dice4.png");

// }else if(randomNumber2 == 5){
//     document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }else{
//     document.querySelector(".img2").setAttribute("src","images/dice5.png");
// };

// if(randomNumber1 > randomNumber2){
//     document.querySelector("h1").innerHTML = "🚩 player 1 wins";
// }else if(randomNumber2 > randomNumber1){
//     document.querySelector("h1").innerHTML = "player 2 wins 🚩";
// }else if(randomNumber1 == randomNumber2){
//         document.querySelector("h1").innerHTML = "🚩 It's a draw 🚩 ";
// }else{
//         document.querySelector("h1").innerHTML = "Refresh";

// };

var randomImage1 = Math.floor(Math.random()*6)+1;
var imageSource1 = "images/dice"+ randomImage1 +".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource1);

var randomImage2 = Math.floor(Math.random()*6)+1;
var imageSource2 = "images/dice"+ randomImage2 +".png";
var image2 = document.querySelector(".img2").setAttribute("src",imageSource2);

if(randomImage1 > randomImage2){
    document.querySelector("h1").innerHTML = "🚩player 1 wins";
}else if(randomImage2 > randomImage1){
    document.querySelector("h1").innerHTML = "player 2 wins🚩";
}else if(randomImage1 == randomImage2){
        document.querySelector("h1").innerHTML = "🚩 draw 🚩 ";
}






