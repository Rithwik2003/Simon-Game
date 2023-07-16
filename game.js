
var butttonColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level=0;

function newSequence(){
    level++;
    $("#level-title").html("Level "+level);
    userClickedPattern=[];
    var randomNumber=Math.random();
    randomNumber=randomNumber*4;
    randomNumber=Math.floor(randomNumber);
    var randomChosenColor = butttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
}


$(".btn").click(function clickBtn(){
    userChosenColor=this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    $("#" + userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    checkAnswer(userClickedPattern.length-1);

});

function playSound(color){
    var audio = new Audio("sounds/"+color+".mp3");
    audio.play();

}

$(document).keydown(function(event){
    if(event.key==="Enter"){
        if(started===false){
            newSequence();
            started=true;
            
        }
    }
    else if(event.key==="r"){
        userChosenColor="red";
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        $("#" + userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
        checkAnswer(userClickedPattern.length-1);
    }
    else if(event.key==="g"){
        userChosenColor="green";
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        $("#" + userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
        checkAnswer(userClickedPattern.length-1);
    }
    else if(event.key==="y"){
        userChosenColor="yellow";
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        $("#" + userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
        checkAnswer(userClickedPattern.length-1);
    }
    else if(event.key==="b"){
        userChosenColor="blue";
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        $("#" + userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
        checkAnswer(userClickedPattern.length-1);
    }
});

function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function() { newSequence(); }, 1000);
        }
    }
    else{
        $("#level-title").html("Game Over, Press Enter to Restart");
         var audio = new Audio("sounds/wrong.mp3");
         audio.play();
         started=false;
         level=0;
         gamePattern=[];
         userClickedPattern=[];
         level=0;
         $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200); 
    }

}

