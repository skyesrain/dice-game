var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomSourceImage = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomSourceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomSourceImage2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[0];
image2.setAttribute("src", randomSourceImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player1 wins";
} else {
 document.querySelector("h1").innerHTML = "draw";
}