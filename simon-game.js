buttonColors = ["green", "red","yellow", "blue"];
userClickedPattern = [];
gamePattern = [];
let activeAudio = "";
let levelTitle = document.querySelector("#level-title");
let buttons = document.querySelectorAll(".btn");
let gameStart = false;
level = 0;

document.addEventListener("keydown", (e) => {
    if(e.key === "a" || e.key ==="A"){
        if(gameStart === false){
            gameStart = true;
            console.log("Game Started!");
            levelTitle.textContent = "Level 0"
        }
        
    

    }
})

function nextSequence(){
    var randomNum = Math.floor(Math.random()*4)
    randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor)
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
    level++;
    levelTitle.innerText = `Level ${level}`;
}

//Button Clicks
buttons.forEach( button => button.addEventListener("click", function(){

    let userChosenColor = this.id
    console.log(userChosenColor);
    console.log("Hello world!");
    console.log(this);

    //record clicked pattern and store it in an array
    userClickedPattern.push(userChosenColor);

    //play audio for each button clicked
    playSound(userChosenColor);

    //animate the button for each button clicked
    animatePress(userChosenColor);

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



// for(i = 0; i < buttons.length; i++){
//     let userChosenColor = buttons[i].id;

//     buttons[i].addEventListener("click", function(){
//         userClickedPattern.push(userChosenColor);
//         userChosenColorArr = buttons[userChosenColor];

//         //play audio if button clicked
//         playSound(userChosenColor);
//         animatePress(userChosenColorArr);

//         console.log(this);
//         console.log(userChosenColor);
//         console.log(userChosenColorArr);
//         })
// }