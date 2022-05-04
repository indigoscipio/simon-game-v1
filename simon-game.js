buttonColors = ["green", "red","yellow", "blue"];
userClickedPattern = [];
gamePattern = [];
let levelTitle = document.querySelector("#level-title");
let buttons = document.querySelectorAll(".btn");
let body = document.querySelector("body");
let gameStart = false;
level = 0;

document.addEventListener("keydown", (e) => {
    if(e.key === "a" || e.key ==="A"){
        if(gameStart === false){
            gameStart = true;
            console.log("Game Started!");
            levelTitle.textContent = "Level 0"
            nextSequence();
        }
    }
})

function nextSequence(){
    userClickedPattern = []
    var randomNum = Math.floor(Math.random()*4)
    randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor)
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
    console.log(`Computer chooses ${gamePattern}`);
    level++;
    levelTitle.innerText = `Level ${level}`;
}

//Button Clicks
buttons.forEach( button => button.addEventListener("click", function(){

    let userChosenColor = this.id

    //record clicked pattern and store it in an array
    userClickedPattern.push(userChosenColor);

    //play audio for each button clicked
    playSound(userChosenColor);

    //animate the button for each button clicked
    animatePress(userChosenColor);
    
    //call checkAnswer function & pass the last value
    checkAnswer(userClickedPattern.length-1);

}))

// ButtonPress
function animatePress(currentColor){
    document.querySelector(`#${currentColor}`).classList.add("pressed")
    setTimeout(() => {
        document.querySelector(`#${currentColor}`).classList.remove("pressed")
    }, 300);
}

//Play Sound function
function playSound(name){
    var name = new Audio(`./sounds/${name}.mp3`);
        name.play();
}

function checkAnswer(currentLevel){
    console.log(`Player chooses ${userClickedPattern}`);
    console.log(currentLevel);
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success!");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence();
            }, 200);
        }
    }
    else{
        playSound("wrong")
        body.classList.add("game-over");
        levelTitle.textContent = "Wrong Answer Fool! Game Over.💀 Press 'r' to restart"
        setTimeout(() => {
            body.classList.remove("game-over");
        }, 2000);
        startOver();
}
}

function startOver(){
    document.addEventListener("keydown", (e) =>{
        if(e.key === "r" || e.key === "R"){
            location.reload();
        }
    })
}