buttonColors = ["green", "red","yellow", "blue"];
gamePattern = [];

function nextSequence(){
    var randomNum = Math.floor(Math.random()*4)
    randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor)
    console.log(randomChosenColor);
    console.log(gamePattern);
}