/* sound V 1. */

var pressingSound;
var pianoSound;
var button;

function preload() {
	pressingSound = loadSound('pressing.mp3');
	pianoSound = loadSound('piano.mp3')
}

function setup() {
	createCanvas(640, 360);

}

function draw() {
	background('#7FFFD4');

	if (pianoSound.isPlaying()){
  	background('red');
  }
  var currentTime = pianoSound.currentTime();
  var duration = pianoSound.duration();
  var timeElapsed = map(currentTime, 0, duration, 0, width);

  fill('green');
  noStroke();
  rect(0, height - 100, timeElapsed, 100);

 // volume
 var vol = map(mouseY, 0, height, 1, 0);
 pianoSound.setVolume(vol);
fill('green');
 rect(0, mouseY, 40, height,);


}

function mousePressed(){

	if (pianoSound.isPlaying()){
		pianoSound.pause();
	}else {
		pianoSound.play();
	}
}
