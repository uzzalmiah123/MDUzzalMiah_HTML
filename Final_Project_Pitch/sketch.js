/*
	final project pitch template
	title
	description
	theme
	interaction
	grapics
*/

var aImage;
var aunderImage;
var arightImage;
var rgbImage;

var currentSlide = 1;
var totalSlides = 8;

var nextBtnX = 960 - 120;
var nextBtnY = 640 - 50;

var backBtnX = 20;
var backBtnY = nextBtnY;

var btnW = 100;
var btnH = 30;


function preload(){
	aImage = loadImage("a.jpg");
	aunderImage = loadImage("aunder.jpg");
	arightImage = loadImage("aright.jpg");
	rgbImage = loadImage("rgb.jpg");
}

function setup() {
	createCanvas(960, 640);
}

function draw() {
	background(51);
	noStroke();
	
	// slides
	if (currentSlide == 1) {
		// title
		textSize(80);
		fill(255);
		textAlign(CENTER, CENTER);

		// fill in your own title
		text('Learn letters or numbers.', width/2, height/2 - 50);
		textSize(60);
		text('By Uzzal Miah', width/2, height/2 + 50);
	
	} else if (currentSlide == 2) {
		// description, theme
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('Introduction', 50, 100, width - 100);
		textSize(35);
		text(' We all use computers, some computer keyboard doesn’t light up, so it heard to see the letters on the keyboard. ', 50, 200, width - 100);
		textSize(35);
		text(' For example, When I use my computer at night in a dark room I can see my keyboard properly. Whatever I press it doesn’t tell me which button I press. ', 50, 350, width - 100);

	} else if (currentSlide == 3) {
		// describe the interaction
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('Interaction', 50, 100, width - 100);
		textSize(35);
		text(' Users will be using a keyboard to pressing the letters, heard the sound, and see the letter. ', 50, 200, width - 100);
		textSize(35);
		text(' Users also will be using a mouse to pressing to change the color of the background. ', 50, 350, width - 100);

	} else if (currentSlide == 4) {
		// describe the graphics
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('Example -1', 50, 100, width - 100);
		
		image(aImage,50, 150, 800, 450);
	
	} else if (currentSlide == 5) {
		// describe the graphics
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('Example -2', 50, 100, width - 100);
		
		image(aunderImage,50, 150, 800, 450);
	}


	else if (currentSlide == 6) {
		// describe the graphics
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('Example -3', 50, 100, width - 100);
		
		image(arightImage,50, 150, 800, 450);
	}




else if (currentSlide == 7) {
		// describe the graphics
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('Mouse press ', 50, 50, width- 100);
		textSize(30);
		text('When the user press the mouse is going to change the background-color (RGB) ', 50, 100, width - 100);
		
		image(rgbImage,50, 150, 800, 450);
	}

	else if (currentSlide == 8) {
		// describe the graphics
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('Thank you! ', width/2.9, height/3, width- 100);
		textSize(30);
		text('Do you have any question?', width/3, height/2 - 50);


}

	// draw buttons
	if (currentSlide < totalSlides) {
		button(nextBtnX, nextBtnY, "Next");
	}

	if (currentSlide > 1) {
		button(backBtnX, backBtnY, "Back");
	}
	
}

// displaying button
function button(x, y, displayText) {

	// draw buttons
	stroke('plum');
	fill(255);
	
	if (mouseX > x && mouseX < x + btnW &&
		mouseY > y && mouseY < y + btnH) {
		fill('yellow');

		if (mouseIsPressed) {
			stroke('yellow');
		}
	}
	
	strokeWeight(4);
	rect(x, y, btnW, btnH, 10);

	noStroke();
	fill('plum');
	textSize(25);
	textAlign(CENTER, CENTER);
	text(displayText, x, y, btnW, btnH);

}

function mousePressed() {
	// over the next button
	if (mouseX > nextBtnX && mouseX < nextBtnX + btnW &&
		mouseY > nextBtnY && mouseY < nextBtnY + btnH) {
		if (currentSlide < totalSlides) {
			currentSlide++;
		}
	}

	// over the back button
	if (mouseX > backBtnX && mouseX < backBtnX + btnW &&
		mouseY > backBtnY && mouseY < backBtnY + btnH) {
		if (currentSlide > 1) {
			currentSlide--;
		}
	}
}

function keyPressed() {
	if (keyCode == 39) { // right arrow
		if (currentSlide < totalSlides) {
			currentSlide++;
		}
	}

	if (keyCode == 37) { // left arrow
		if (currentSlide > 1) {
			currentSlide--;
		}
	}
}