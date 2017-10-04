// Zombulator by Hannah Birchem 

var zombiex = 50;

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(255, 255, 255);
	fill(252, 252, 136);
	ellipse(zombiex, 50, 80, 80);
	fill(150, 150, 200);
	ellipse(200, 100, 80, 80);
	zombiex = zombiex + 10;
}
