var n=  document.querySelectorAll(".drum").length;
//on clicking any button on screen
for(var i=0;i<n;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML= this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
   });
}

//on pressing any key
document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

//make sounds
function makesound(buttonInnerHTML){
    if(buttonInnerHTML==="w"){
        var audio= new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if(buttonInnerHTML==="a"){
        var audio= new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else if(buttonInnerHTML==="s"){
        var audio= new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(buttonInnerHTML==="d"){
        var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if(buttonInnerHTML==="j"){
        var audio= new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(buttonInnerHTML==="k"){
        var audio= new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(buttonInnerHTML=="l"){
        var audio= new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else{
        console.log("Not clicked");
    }
}

//button animation
function buttonAnimation(key){
    var activeButton= document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 200);
}