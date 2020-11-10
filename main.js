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
var angryCat=document.getElementById("angryCat")
var animeSong1 = new Audio("sounds/animeSong1.mp3");
var animeSong2 = new Audio("sounds/animeSong2.mp3");
var animeSong3 = new Audio("sounds/animeSong3.mp3");
var animeSong4 = new Audio("sounds/animeSong4.mp3");
var animeSong5 = new Audio("sounds/animeSong5.mp3");

var glitterSound = new Audio("sounds/glitter.mp3");
// var voices = window.speechSynthesis.getVoices();
var songArray = [animeSong1, animeSong2, animeSong3, animeSong4, animeSong5];
button.addEventListener("click", uwuify);
resetButton.addEventListener("click",reset);

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

  if(inputValue.includes("angry")){
    angryCat.classList.remove("hidden-cat")
  }

  var splitInput = inputValue.toLowerCase().split(" ");
  var randomNumber = Math.floor(Math.random() * Math.floor(splitInput.length));
  var randomWord = splitInput[randomNumber];
  var newRandomWord = randomWord[0] + "-" + randomWord;
  splitInput[randomNumber] = newRandomWord;

  for (var i = 0; i < splitInput.length; i++) {
    var word = splitInput[i]
    if (word === "hi") {
      word = "ohai";
    }
    if (word === "this"){
      word = "dis"
    }
    if (word === "i") {
      word = "me";
    }
    if (word === "your") {
      word = "ur";
    }
    if (
      word === "its" ||
      word === "it's" ||
      word === "is" ||
      word === "am"
    ) {
      word = "ish";
    }
    if (word === "hungry") {
      word = "hungy";
    }
    if (word === "you") {
      word = "yuwu";
    }
    if (word === "please") {
      word = "pweez";
    }
    if (word === "cute") {
      word = "kawaii desune";
    }
    if (word === "have") {
      word = "hab";
    }
    if (word === "give") {
      word = "gib";
    }
    if (word === "hey") {
      word = "ohayo";
    }
    if (word === "stop") {
      word = "stahp";
    }
    if (word === "the") {
      word = "da";
    }
    if (word === "lol") {
      word = "wwwwwww";
    }
    if (word === "angry") {
      word = "angy 😾";
    }
    if (word === "gelowaggle") {
      word = "gewo-senpai";
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
    if(word.length === 1 ){
      emptyArray.push(word)
    } else {
      emptyArray.push(newWord[word.length - 1]);
    }
    emptyArray.push(" ");
    output.textContent =
      // emptyArray[randomNumber] + "-" +
      emptyArray.join("") + " uwu";
  }
  updateDOM();
}

(function () {
  var COLORS,
    Confetti,
    NUM_CONFETTI,
    PI_2,
    canvas,
    confetti,
    context,
    drawCircle,
    g,
    range,
    resizeWindow,
    xpos;

  NUM_CONFETTI = 350;

  COLORS = [
    [255, 255, 255],
    [255, 105, 180],
    [255, 252, 187],
    [255, 105, 180],
    [255, 255, 255],
  ];

  PI_2 = 2 * Math.PI;
  canvas = document.getElementById("world");
  context = canvas.getContext("2d");
  window.w = 0;
  window.h = 0;
  resizeWindow = function () {
    window.w = canvas.width = window.innerWidth;
    return (window.h = canvas.height = window.innerHeight);
  };

  window.addEventListener("resize", resizeWindow, false);
  window.onload = function () {
    return setTimeout(resizeWindow, 0);
  };
  range = function (a, b) {
    return (b - a) * Math.random() + a;
  };
  drawCircle = function (x, y, r, style) {
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    context.fillStyle = style;
    return context.fill();
  };
  xpos = 0.5;
  document.onmousemove = function (e) {
    return (xpos = e.pageX / w);
  };
  window.requestAnimationFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
  Confetti = class Confetti {
    constructor() {
      this.style = COLORS[~~range(0, 5)];
      this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
      this.r = ~~range(2, 6);
      this.r2 = 2 * this.r;
      this.replace();
    }
    replace() {
      this.opacity = 0;
      this.dop = 0.03 * range(1, 4);
      this.x = range(-this.r2, w - this.r2);
      this.y = range(-20, h - this.r2);
      this.xmax = w - this.r;
      this.ymax = h - this.r;
      this.vx = range(0, 2) + 8 * xpos - 5;
      return (this.vy = 0.7 * this.r + range(-1, 1));
    }
    draw() {
      var ref;
      this.x += this.vx;
      this.y += this.vy;
      this.opacity += this.dop;
      if (this.opacity > 1) {
        this.opacity = 1;
        this.dop *= -1;
      }
      if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
      }
      if (!(0 < (ref = this.x) && ref < this.xmax)) {
        this.x = (this.x + this.xmax) % this.xmax;
      }
      return drawCircle(
        ~~this.x,
        ~~this.y,
        this.r,
        `${this.rgb},${this.opacity})`
      );
    }
  };
  confetti = (function () {
    var j, ref, results;
    results = [];
    for (
      g = j = 1, ref = NUM_CONFETTI;
      1 <= ref ? j <= ref : j >= ref;
      g = 1 <= ref ? ++j : --j
    ) {
      results.push(new Confetti());
    }
    return results;
  })();
  window.step = function () {
    var c, j, len, results;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    results = [];
    for (j = 0, len = confetti.length; j < len; j++) {
      c = confetti[j];
      results.push(c.draw());
    }
    return results;
  };
  step();

}.call(this));
function updateDOM() {
  var msg = new SpeechSynthesisUtterance(output.textContent);
  msg.volume = 0.6; // 0 to 1
  msg.lang = "ja-JP";
  setTimeout(function () {
    window.speechSynthesis.speak(msg);
  }, 1500);

  songArray[randomSongNumber].volume = 0.08;
  songArray[randomSongNumber].play();
  glitterSound.volume = 0.16;
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

function reset(){
  window.location.reload();
}

function urlChomp() {
  const message = new URLSearchParams(location.search).get("message");
  if (!message) return;
  input.value = message;
  button.click();
}
