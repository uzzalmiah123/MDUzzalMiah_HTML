/* custom function
mouse ingteraction sound sampler
/*
	Interaction 3 - Collisions
*/
var box;

var bgColor = '#7FFFD4';
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

	box = createButton("pause");
	box.mousePressed(togglePlaying);

}

function draw(){
	background(bgColor);

	
//ellipse
button(100, 100, 100, blackSound, "black");
button(300, 100, 100, whiteSound, 'white');
button(500, 100, 100, greenSound, 'green');
button(100, 250, 100, blueSound, 'blue');
button(300, 250, 100, yellowSound, 'yellow');
button(500, 250, 100, redSound, 'red');
button(300, 400, 100, orangeSound, 'orange');



rectButton(50, 370, 100, 50, twinkleSound);
rectButton(450, 370, 120, 50, friendsSound);

}
function rectButton(x, y, w, h, sound){

// detect mouse inside rect
if (mouseX > x && mouseX < x + w && 
	mouseY > y && mouseY < y + h){

	if (mouseIsPressed && !sound.isPlaying()) {
			sound.play();
		}

	fill('#6C3483')
	}else{
		fill('skyblue');
	}


rect(x, y, w, h);
}

function button(x, y, s, sound, col){
	var d = dist(x, y, mouseX, mouseY);
	// calculate distance
	if (d < s / 2 ) {
		// outside the button
		fill('#6C3483');

		if (mouseIsPressed && !sound.isPlaying()) {
			sound.play();
		}

		if(mouseIsPressed) {
		bgColor = col;
		}else {
			bgColor = '#7FFFD4'
		}
	 //inside button

	}else {
		fill(col)
	}
	ellipse(x, y, s);

}
function togglePlaying(){
	twinkleSound.pause();
	friendsSound.pause()
}
