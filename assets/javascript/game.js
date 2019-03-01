$(document).ready(function() {

// randomnly generated goal number
var min = 19;
var max = 120;
var randNum = Math.floor(Math.random() * (max - min + 1)) + min;

var wins = 0;
var losses = 0;

// crystal values
var blueVal = Math.floor(Math.random() * 12) + 1;
var greenVal = Math.floor(Math.random() * 12) + 1;
var pinkVal = Math.floor(Math.random() * 12) + 1;
var whiteVal = Math.floor(Math.random() * 12) + 1;

// player's cumulative crystal score
var totalScore = 0;

// show the random number on page
$("#goal-number").text(randNum);

// clicking gems increases player's score
$("#bluegem").on("click", function() {
    totalScore += blueVal;
    $("#score").text(totalScore);
});

$("#greengem").on("click", function() {
    totalScore += greenVal;
    $("#score").text(totalScore);
});

$("#pinkgem").on("click", function() {
    totalScore += pinkVal;
    $("#score").text(totalScore);
});

$("#whitegem").on("click", function() {
    totalScore += whiteVal;
    $("#score").text(totalScore);
});

// determining winning or losing - code not working
if (totalScore === randNum) {
    wins++;
    randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    totalScore = 0;
} else if (totalScore > randNum) {
    losses++;
    randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    totalScore = 0;
}


});