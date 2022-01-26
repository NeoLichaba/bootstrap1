// Create global variables
var trainSpeed = 400;
var trainPosition = 0;
var animation;

//Listen for click events on the train element and call a function named "speedUp" or "StopTrain" when they happen

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

// Test the value of the trainSpeed variable
function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

// 
    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);

// Reposition the train

    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}
//test whether current position is equal to 510
function checkPosition(currentPosition) {
    if (currentPosition === 450) {
        alert(":O!");
        console.log("Crash!");
        clearInterval(animation);
    }
}
// stopTrain function runs when stop button is clicked
function stopTrain() {
    if (trainPosition < 400) {
        alert("Whew! That was close!");
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}