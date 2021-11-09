

var button = document.getElementById("onClick");
var output = document.getElementById("output");
var input = document.getElementById("formInput");
var body = document.getElementById("body");
var outputDiv1 = document.getElementById("outputBackground1");
var outputDiv2 = document.getElementById("outputBackground2");
var outputDiv3 = document.getElementById("outputBackground3");
var outputDiv4 = document.getElementById("outputBackground4");
var outputDiv5 = document.getElementById("outputBackground5");
var dancingGif = document.getElementById("dancingGif");
var chikaGif = document.getElementById("chika");
var shyFingers = document.getElementById("shyFingers");
var confetti = document.getElementById("world")
var outputBox = document.getElementById("outputBox");
var sway = document.getElementById("sway");
var sway2 = document.getElementById("sway2");
var resetButton = document.getElementById("resetButton")
var angryCat = document.getElementById("angryCat")
var animeSong1 = new Audio("sounds/animeSong1.mp3");
var animeSong2 = new Audio("sounds/animeSong2.mp3");
var animeSong3 = new Audio("sounds/animeSong3.mp3");
var animeSong4 = new Audio("sounds/animeSong4.mp3");
var animeSong5 = new Audio("sounds/animeSong5.mp3");

var glitterSound = new Audio("sounds/glitter.mp3");
// var voices = window.speechSynthesis.getVoices();
var songArray = [animeSong1, animeSong2, animeSong3, animeSong4, animeSong5];
button.addEventListener("click", uwuify);
resetButton.addEventListener("click",weset);

var randomSongNumber = Math.floor(
  Math.random() * Math.floor(songArray.length)
);

function addSpin() {
  var cuteStar = document.querySelectorAll(".cute-star");
  for (var i = 0; i < 5; i++) {
    cuteStar[i].classList.add("spin");
  }
}
setInterval(shy, 300);
urlChomp()
function shy() {
  return shyFingers.textContent === "👉      👈 "
    ? (shyFingers.textContent = "👉👈 ")
    : (shyFingers.textContent = "👉      👈 ");
}
function uwuify() {
  var emptyArray = [];
  event.preventDefault();
  var inputValue = input.value;
  if (!inputValue) {
    output.textContent = "Pwease Enter a Sentence uwu";
    return;
  }

  if (inputValue.includes("angry")) {
    angryCat.classList.remove("hidden-cat");
  }
  console.log(inputValue)
  console.log("BEFORE TRIM", inputValue.length)
  var trimmedValue = inputValue.trim()
  console.log("AFTER TRIM", trimmedValue.length)
  var splitInput = trimmedValue.toLowerCase().split(" ");
  var randomNumber = Math.floor(Math.random() * Math.floor(splitInput.length));

  var randomWord = splitInput[randomNumber];
  var newRandomWord = randomWord[0] + "-" + randomWord;
  splitInput[randomNumber] = newRandomWord;

  var wordTable = {
    hi: "ohai",
    this: "dis",
    i: "me",
    your: "ur",
    its: "ish",
    "it's": "ish",
    is: "ish",
    am: "ish",
    hungry: "hungy",
    you: "yuwu",
    please: "pweez",
    cute: "kawaii desune",
    have: "hab",
    give: "gib",
    hey: "ohayo",
    stop: "stahp",
    the: "da",
    lol: "wwwwwww",
    angry: "angy 😾",
    gelowaggle: "gewo-senpai",
    love: "wuv",
    sad: "sadge",
  };

  for (var i = 0; i < splitInput.length; i++) {
    var word = splitInput[i];
    if (wordTable[word]) {
      word = wordTable[word];
    }

    for (var j = 0; j < word.length - 1; j++) {
      var newWord = word
        .replace("sh", "s")
        .replace("rr", "r")
        .replace("ss", "s");
      if (newWord[j] === "l" || newWord[j] === "r") {
        emptyArray.push("w");
      } else if (newWord[j] === "s") {
        emptyArray.push("sh");
      } else {
        emptyArray.push(newWord[j]);
      }
    }
    if (word.length === 1) {
      emptyArray.push(word);
    } else {
      emptyArray.push(newWord[word.length - 1]);
    }
    emptyArray.push(" ");
    output.textContent = emptyArray.join("") + " uwu";
  }
  updateDOM();
}

function updateDOM() {
  var msg = new SpeechSynthesisUtterance(output.textContent);
  msg.volume = 0.6; // 0 to 1
  msg.lang = "ja-JP";
  msg.pitch = 1.25;
  setTimeout(function () {
    window.speechSynthesis.speak(msg);
  }, 1500);

  songArray[randomSongNumber].volume = 0.08;
  songArray[randomSongNumber].play();
  glitterSound.volume = 0.15;
  glitterSound.play();

  addSpin();
  body.classList.add("pink");
  outputDiv1.classList.add("fade-in-left");
  outputDiv2.classList.add("fade-in-left");
  outputDiv3.classList.add("fade-in-left");
  outputDiv4.classList.add("fade-in-left");
  outputDiv5.classList.add("fade-in-left");
  dancingGif.classList.add("fade-in-left");
  resetButton.classList.add("fade-in-up-reset");
  dancingGif.classList.add("reveal");
  chikaGif.classList.add("fade-in-right");
  chikaGif.classList.add("reveal");
  sway.classList.add("fade-in-left-sway");
  sway.classList.add("reveal");
  sway2.classList.add("fade-in-right-sway");
  sway2.classList.add("reveal");
  confetti.classList.remove("hidden");
  confetti.classList.add("reveal");
  outputBox.classList.remove("hidden");
  outputBox.classList.add("reveal");
}

function weset(){
  window.location.reload();
}

function urlChomp() {
  const message = new URLSearchParams(location.search).get("message");
  if (!message) return;
  input.value = message;
}
