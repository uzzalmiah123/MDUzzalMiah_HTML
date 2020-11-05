/* custom function
mouse ingteraction sound sampler
/*
	Interaction 3 - Collisions
*/
var button;
//Voice
var blackSound;
var whiteSound;
var greenSound;
var blueSound;
var yellowSound;
var redSound;
var orangeSound;
var twinkleSound;
var friendsSound


function preload() {
	blackSound = loadSound('black.wav');
	whiteSound = loadSound('white.wav');
	greenSound = loadSound('green.wav');
	blueSound = loadSound('blue.wav');
	yellowSound = loadSound('yellow.wav');
	redSound = loadSound('red.wav');
	orangeSound = loadSound('orange.wav');
	twinkleSound = loadSound('twinkle.mp3');
	friendsSound = loadSound('friends.mp3');

}


function setup(){
	createCanvas(640, 450);

	textSize(30);

	button = createButton("pause");
	button.mousePressed(togglePlaying);
}

function draw(){
	background('#7FFFD4');

	
// first button
	var x = 100;
	var y = 100;
	var s = 100;
	var d = dist(x, y, mouseX, mouseY);
	// calculate distance
	if (d < s / 2 ) {
		// outside the button
		fill('#6C3483');
		// sound
		if (mouseIsPressed && !whiteSound.isPlaying()) {
			whiteSound.play();
		}

		// background
		if (whiteSound.isPlaying()){
		    background('white');
	 }
	 //inside button

	}else {
		fill('white')
	}
	ellipse(x, y, s);



// scound button
	var x = 300;
	var y = 100;
	var s = 100;
	var d = dist(x, y, mouseX, mouseY);
	// calculate distance
	if (d < s / 2 ) {
		// outside the button
		fill('#6C3483');

		// sound
		if (mouseIsPressed && !blackSound.isPlaying()) {
			blackSound.play();
		}

		// background
		if (blackSound.isPlaying()){
		    background('black');
	 }
	 //inside button

	}else {
		fill('black')
	}
	ellipse(x, y, s);

// Thire button

	var x = 500;
	var y = 100;
	var s = 100;
	var d = dist(x, y, mouseX, mouseY);
	// calculate distance
	if (d < s / 2 ) {
		// outside the button
		fill('#6C3483');
		// sound
		if (mouseIsPressed && !greenSound.isPlaying()) {
			greenSound.play();
		}

		// background
		if (greenSound.isPlaying()){
		    background('green');
	 }
	 //inside button

	}else {
		fill('green')
	}
	ellipse(x, y, s);

// Fourth button

	var x = 100;
	var y = 250;
	var s = 100;
	var d = dist(x, y, mouseX, mouseY);
	// calculate distance
	if (d < s / 2 ) {
		// outside the button
		fill('#6C3483');
		// sound
		if (mouseIsPressed && !blueSound.isPlaying()) {
			blueSound.play();
		}

		// background
		if (blueSound.isPlaying()){
		    background('blue');
	 }
	 //inside button

	}else {
		fill('blue')
	}
	ellipse(x, y, s);

// Fifth button

	var x = 300;
	var y = 250;
	var s = 100;
	var d = dist(x, y, mouseX, mouseY);
	// calculate distance
	if (d < s / 2 ) {
		// outside the button
		fill('#6C3483');
		// sound
		if (mouseIsPressed && !yellowSound.isPlaying()) {
			yellowSound.play();
		}

		// background
		if (yellowSound.isPlaying()){
		    background('yellow');
	 }
	 //inside button

	}else {
		fill('yellow')
	}
	ellipse(x, y, s);

// sixth button

	var x = 500;
	var y = 250;
	var s = 100;
	var d = dist(x, y, mouseX, mouseY);
	// calculate distance
	if (d < s / 2 ) {
		// outside the button
		fill('#6C3483');
		// sound
		if (mouseIsPressed && !redSound.isPlaying()) {
			redSound.play();
		}

		// background
		if (redSound.isPlaying()){
		    background('red');
	 }
	 //inside button

	}else {
		fill('red')
	}
	ellipse(x, y, s);	

// seventh button

	var x = 300;
	var y = 400;
	var s = 100;
	var d = dist(x, y, mouseX, mouseY);
	// calculate distance
	if (d < s / 2 ) {
		// outside the button
		fill('#6C3483');
		// sound
		if (mouseIsPressed && !orangeSound.isPlaying()) {
			orangeSound.play();
		}

		// background
		if (orangeSound.isPlaying()){
		    background('orange');
	 }
	 //inside button

	}else {
		fill('orange')
	}
	ellipse(x, y, s);

// Eighth button rectangle

var x = 50;
var y = 370;
var w = 100;
var h = 50;

// detect mouse inside rect
if (mouseX > x && mouseX < x + w && 
	mouseY > y && mouseY < y + h){
	fill('#6C3483')

if (mouseIsPressed && !twinkleSound.isPlaying()) {
			twinkleSound.play();
		}

		// background
		if (twinkleSound.isPlaying()){
		    background('#ABEBC6');
	 }
} else {
	fill('#1A5276 ')
}

rect(x, y, w, h);
textFont('Patua One');
fill('#7FFFD4')
 text("Twinkle",x, 405,);


// ninth button

var x = 450;
var y = 370;
var w = 100;
var h = 50;

// detect mouse inside rect
if (mouseX > x && mouseX < x + w && 
	mouseY > y && mouseY < y + h){
	fill('#6C3483')

if (mouseIsPressed && !friendsSound.isPlaying()) {
			friendsSound.play();
		}

		// background
		if (friendsSound.isPlaying()){
		    background('#ABEBC6');
	 }
} else {
	fill('#1A5276 ')
}

rect(x, y, w, h);
textFont('Patua One');
fill('#7FFFD4')
 text("Friends",x, 405,);

}


function togglePlaying(){
	twinkleSound.pause();
	friendsSound.pause();
}
