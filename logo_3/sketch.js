




var x = 0;
var y = 100;
var s = 150;
var xSpeed = 3;// speed
var ySpeed = 3;
var c;// color
var count = 0;

//images
var logo_1Image;
var logo_2Image;
var logo_3Image;
var currentImage;

function preload(){
	logo_1Image = loadImage('logo_1.png');
	logo_2Image = loadImage('Logo_2.png');
	logo_3Image = loadImage('logo_3.png');
}

function setup(){
	createCanvas(640, 360);
	noStroke();
	textAlign(CENTER,);
	imageMode(CENTER);
	var r = random(255);
	var g = random(255);
	var b = random(255);

	c = color(r, g, b); 
	currentImage = logo_1Image;

}
function draw(){
	background('#7FFFD4');

	fill(c);
	textSize(s/2);
	text("Uzzal", x, y,0,);
	tint(c);
image(currentImage, x, y, s*1.5, s*1.5);

count++;
	if (count == 30){
		s = random(100, 200);
		count = 0;
	}

	x += xSpeed;
	y += ySpeed;

	if (x > width || x < 0){
		xSpeed *= -1;
		currentImage = logo_2Image;
		var r = random(255);
		var g = random(255);
		var b = random(255);

		c = color(r, g, b);
	}

	if (y > height || y < 0){
		ySpeed *= -1
		currentImage = logo_3Image;
		var r = random(255);
		var g = random(255);
		var b = random(255);

		c = color(r, g, b);
		
	}

}