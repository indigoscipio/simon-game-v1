buttonColors = ["green", "red","yellow", "blue"];
userClickedPattern = [];
gamePattern = [];
let activeAudio = "";
let buttons = document.querySelectorAll(".btn");

function nextSequence(){
    var randomNum = Math.floor(Math.random()*4)
    randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor)
    playSound(randomChosenColor);
    console.log(randomChosenColor);
    console.log(gamePattern);
}

//Button Clicks
for(i = 0; i < buttons.length; i++){
    let userChosenColor = buttons[i].id;

    buttons[i].addEventListener("click", function(){
        userClickedPattern.push(userChosenColor);
        userChosenColorArr = buttons[userChosenColor];

        //play audio if button clicked
        playSound(userChosenColor);
        animatePress(userChosenColorArr);

        console.log(this);
        console.log(userChosenColor);
        console.log(userChosenColorArr);
        })
}

//ButtonPress
function animatePress(currentColor){
    currentColor.classList.add("pressed");
    console.log(currentColor);
}


//Play Sound function
function playSound(name){
    var name = new Audio(`./sounds/${name}.mp3`);
        name.play();
}