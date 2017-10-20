// http://tinyurl.com/cs160ex14
// Zombulator by Hannah Birchem
// CS 160 Exercise 14: Parameterized functions

var backgroundColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const NUMBER_OF_ZOMBIES = 100;
const NUMBER_OF_HUMANS = 100;

var zombieXs;
var zombieYs;
var zombieSizes;
var zombieColors;

var humanXs;
var humanYs;
var humanSizes;
var humanColors;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializeZombies();
  initializeHumans();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawZombies();
  drawHumans();
}

function initializeZombies() {
  zombieXs = [];
  zombieYs = [];
  zombieSizes = [];
  zombieColors = [];
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    initializeZombie(i);
  }
}

function initializeZombie(index) {
  zombieXs[index] = random(0, windowWidth);
  zombieYs[index] = random(0, 200);
  zombieSizes[index] = random(MIN_SIZE, MAX_SIZE);
  zombieColors[index] = color(random(100, 255), random(50, 150), random(50, 150), 150);
}

function initializeHumans() {
  humanXs = [];
  humanYs = [];
  humanSizes = [];
  humanColors = [];
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    humanXs[i] = random(0, windowWidth);
    humanYs[i] = random(windowHeight - 200, windowHeight);
    humanSizes[i] = random(MIN_SIZE, MAX_SIZE);
    humanColors[i] = color(random(50, 150), random(50, 150), random(150, 255), 150);
  }
}

function drawZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    drawZombie(i);
  }
}

function drawZombie(index) {
  fill(zombieColors[index]);
  ellipse(zombieXs[index], zombieYs[index], zombieSizes[index], zombieSizes[index]);
}

function drawHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    fill(humanColors[i]);
    ellipse(humanXs[i], humanYs[i], humanSizes[i], humanSizes[i]);
  }
}