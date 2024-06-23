
const buttonColours=["red","blue","green","yellow"];

var gamePattern=[];

var userClickedPattern = [];

var started= false;

var level=0;

$(document).keypress(function(){
  if (!started){

    $("#level-title ").text("Level"+level);
    nextSequence();
    started = true;

}

});

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});


function nextSequence(){


    userClickedPattern = [];

    level++;

    $("#level-title").text("level"+level);

    var randomNumber = Math.floor(Math.random() * 4);
    
    var randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
}
function playSound(name){

    var audio = new Audio("sounds/" +name+ ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
   
}

function checkAnswer(currentlevel){
    if (userClickedPattern[currentlevel ]=== gamePattern[currentlevel]){

        if (gamePattern.length=== userClickedPattern.length){
            setTimeout(function() { nextSequence(); }, 1000);
            

        }
    

    }
    else{

        var audio = new Audio("sounds/wrong.mp3");
        audio.play();

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);


        $("h1").text("Game Over, Press Any Key to Restart");
        level=0;
        gamePattern=[];
        started= false;

    }

    



}














