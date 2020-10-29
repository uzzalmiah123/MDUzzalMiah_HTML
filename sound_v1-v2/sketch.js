/* sound V 1- 2. */

var button;
//Images
var pianoImage;
var dropwaterImage;
var car1Image;
var car2Image;
var drumImage;
var rainImage;
var windyImage;
var birdsImage;

// Sound
var waterdropSound;
var pianoSound;
var birdsSound;
var horn1Sound;
var horn2Sound;
var rainSound;
var drumSound;
var windySound;

function preload() {
	// Images
	pianoImage = loadImage('piano.jpg'); // Piano Space Key 32
	dropwater = loadImage('dropwater.jpg'); // Dropwater ArrowUp Key 38
	car1Image = loadImage('car1.jpg'); // Car 1 ArrowLeft key 37
	car2Image = loadImage('car2.jpg'); // Car 2 ArrowRight key 39
	rainImage = loadImage('rain.jpg'); // Rain Enter key 13
	windyImage = loadImage('windy.jpg'); // Windy Shift key 16
	birdsImage = loadImage('birds.jpg'); // Birds Tab key 9
	drumImage = loadImage('drum.jpg'); // Durm ArrowDown key 40

	// Sound
	rainSound = loadSound('Rain.wav'); // Rain Enter key 13
	windySound = loadSound('windy.mp3'); // Windy Shift key 16
	birdsSound = loadSound('Bird.mp3'); // Birds Tab key 9
	pianoSound = loadSound('Piano.mp3'); // Piano Space Key 32
	waterdropSound = loadSound('waterdrop.wav'); // Dropwater ArrowUp Key 38
	horn1Sound = loadSound('horn1.wav'); // Car 1 ArrowLeft key 37
	horn2Sound = loadSound('horn2.wav'); // Car 2 ArrowRight key 39
	drumSound = loadSound('durm.wav'); // Durm ArrowDown key 40

}

function setup() {
	createCanvas(640, 360);
	textSize(150);
	pianoSound.playMode('restart');
	rainSound.playMode('restart');
	windySound.playMode('restart');	

	button = createButton("pause");
	button.mousePressed(togglePlaying);
}






function draw(){
	background('#7FFFD4');
  fill('yellow');
  noStroke();
  rect(0, height - 100, timeElapsed, 100);




textFont('Patua One');
fill('#35C796')
 text("Sound",110, 220,);
if (pianoSound.isPlaying()){
    image(pianoImage,0, 0,width, height);
}
	if (waterdropSound.isPlaying()){
		    image(dropwater,0, 0,width, height);

	}
	if (horn1Sound.isPlaying()){
		    image(car1Image,0, 0,width, height);
	 }
	 
	if (horn2Sound.isPlaying()){
		    image(car2Image,0, 0,width, height);
	 }
	
	 if (rainSound.isPlaying()){
		    image(rainImage,0, 0,width, height);
	 }
	 
	 if (windySound.isPlaying()){
		    image(windyImage,0, 0,width, height);
	 }
	 
	 if (birdsSound.isPlaying()){
		    image(birdsImage,0, 0,width, height);
	 }
	 
	 if (drumSound.isPlaying()){
		    image(drumImage,0, 0,width, height);
	 }

	 var currentTime = pianoSound.currentTime();
  var duration = pianoSound.duration();
  var timeElapsed = map(currentTime, 0, duration, 0, width);

  fill('green');
  noStroke();
  rect(0, height - 100, timeElapsed, 100);

}









function keyPressed(){
	if (keyCode == 32){ // Space Chaaracter
		pianoSound.play();
	}
	if (keyCode == 38){ // ArrowUp
		waterdropSound.play();
	}
	if (keyCode == 37){ // ArrowLeft
		horn1Sound.play();
	}
	if (keyCode == 39){ // ArrowRight
		horn2Sound.play();
	}
	if (keyCode == 13){ // Enter
		rainSound.play();
	}
	if (keyCode == 16){ // Shift
		windySound.play();
	}
	if (keyCode == 9){ // Tab
		birdsSound.play();
	} 
	if (keyCode == 40){ // ArrowDown
		drumSound.play();
	}
}

function togglePlaying(){
	birdsSound.pause();
	windySound.pause();
	rainSound.pause();
	pianoSound.pause();
}
