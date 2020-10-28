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
var animeMusic = new Audio("../sounds/animeSong.mp3");
var glitterSound = new Audio("../sounds/glitter.mp3");
var voices = window.speechSynthesis.getVoices();

button.addEventListener("click", uwuify);

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
  var splitInput = inputValue.toLowerCase().split(" ");
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
      word = "gibu";
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
    if (word === "gelowaggle") {
      word = "gewo-senpai";
    }

    for (var j = 0; j < word.length - 1; j++) {
      var newWord = word.replace("sh", "s").replace("rr","r")
      if (newWord[j] === "l" || newWord[j] === "r") {
        emptyArray.push("w");
      } else if (word[j] === "s") {
        emptyArray.push("sh");
      }
        else if (word[j] === "v") {
        emptyArray.push("b");
      } else {
        emptyArray.push(newWord[j]);
      }
    }

    if(word.length ===1 ){
      emptyArray.push(word)
    } else {
    emptyArray.push(newWord[word.length - 1]);
    }
    emptyArray.push(" ");
    output.textContent = emptyArray.join("") + " uwu";
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
  msg.voice = voices[10]; // Note: some voices don't support altering params
  msg.voiceURI = "native";
  msg.volume = 0.6; // 0 to 1
  msg.rate = 10; // 0.1 to 10
  msg.pitch = 2; //0 to 2
  msg.lang = "ja-JA";
  setTimeout(function () {
    window.speechSynthesis.speak(msg);
  }, 1500);

  addSpin();
  animeMusic.volume = 0.08;
  animeMusic.play();
  glitterSound.volume = 0.16;
  glitterSound.play();
  body.classList.add("pink");
  outputDiv1.classList.add("fade-in-left");
  outputDiv2.classList.add("fade-in-left");
  outputDiv3.classList.add("fade-in-left");
  outputDiv4.classList.add("fade-in-left");
  outputDiv5.classList.add("fade-in-left");
  dancingGif.classList.add("fade-in-left");
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
