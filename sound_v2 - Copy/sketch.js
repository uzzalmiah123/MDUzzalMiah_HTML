/* sound V 1- 2. */

/*
	Interaction 2 - Collisions
*/

var r, g, b;
var horn1Sound;

function preload(){
	horn1Sound = loadSound('horn1.wav');
}

function setup(){
	createCanvas(640, 360);
	r = random(255);
	g = random(255);
	b = random(255);
}

function mousePressed(){
	var d = dist(100, 100, mouseX, mouseY);
	if (d < 50){
		
		r = random(255);
		g = random(255);
		b = random(255);
	}
	if (mouseX > 400 && mouseX < 500 && mouseY >100 && mouseY < 150) {
		horn1Sound.play()
	}

}

function draw(){
	background(r, g, b);

	//circle buttonn
	fill('red');
	var d = dist(100, 100, mouseX, mouseY);
	if (d < 50){
		fill('green');
	}
	circle(100, 100, 100);


	// rect button
	fill('red');
	if (mouseX > 400 && mouseX < 500 && mouseY >100 && mouseY < 150) {
		fill('green');
	}

	rect(400, 100, 100, 50)

}