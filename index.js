function rollDice() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
    var randomDiceImage = "dice" + randomNumber1 + ".png"; 
    var randomImageSource = "Images/" + randomDiceImage; 
    var image1 = document.getElementById("img");
    image1.src = randomImageSource;

}
