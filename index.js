var randonNumber1 =  Math.floor(Math.random() * 6) +1;
var randonNumber2 =  Math.floor(Math.random() * 6) +1;

let pl1=document.getElementById("pl1");
let pl2=document.getElementById("pl2");

pl1.addEventListener("click",()=>{

    var randomDiceImage1 = "dice"+randonNumber1+".png"; //  dice1.png
var randomSourceImage1 = "assets/"+randomDiceImage1; //  assets/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSourceImage1);
})


pl2.addEventListener("click",()=>{
var randomDiceImage2 = "dice"+randonNumber2+".png"; // dice1.png
var randomSourceImage2 = "assets/"+randomDiceImage2;  // assets/dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSourceImage2);

if(randonNumber1 > randonNumber2){
    document.querySelector("h1").innerHTML = "😎 Player 1 Wins!";
}
else if  (randonNumber1 < randonNumber2){
    document.querySelector("h1").innerHTML = "😎 Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML = "😒 Draw"
}

})


