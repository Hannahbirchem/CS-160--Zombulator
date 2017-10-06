// Zombulator by Hannah Birchem 

var zombiex = 50;
var zombie2x = 100;

function setup() {
	createCanvas(displayWidth, displayHeight);
}

function draw() {
	background(255, 255, 255);
	fill(random(252), random(252), random(255));
	strokeWeight(0);  // Default
	ellipse(zombiex, 50, 80, 80);
	fill(random (150), random(150), random(200));
	ellipse(zombie2x, 100, 80, 80);
	zombiex = zombiex + 4;
	zombie2x = zombie2x + 3;
	if (zombiex >= width) {
		zombiex = 0;
	}
	if (zombie2x >= width) {
		zombie2x = 0;
	}
}