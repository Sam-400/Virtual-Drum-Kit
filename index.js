// alert("working")

var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0 ; i < numberOfDrumButton ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", click); 
}


// button listner
function click() {
    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);
    animate(buttonInnerHtml);
};


// key pressed
// when a key is pressed " event " is trigged 
// " key " returns the key value 
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    animate(event.key);
});

function makeSound(key) {
    
    switch (key) {
        case "w":
            var tom = new Audio('sounds/tom-1.mp3');
            tom.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        default:
            console.log();
    }
}


// animation
function animate(currentKey) {
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed");
    // delay 
    setTimeout(function () {
        active.classList.remove("pressed");
    }, 200); 
    
}


