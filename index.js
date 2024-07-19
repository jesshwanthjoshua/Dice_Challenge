var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var dicetext1 = "./images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", dicetext1);
console.log(randomNumber1); 

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var dicetext2 = "./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", dicetext2);
console.log(randomNumber2); 


if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML="Draw!!";
    console.log("Its a Draw");
}
else if (randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML="Player 1 Wins 🚩";
    console.log("Player 1 Wins 🚩");
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
    console.log("Player 2 Wins 🚩");
}

