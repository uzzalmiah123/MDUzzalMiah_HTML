/* 
Logo V 1
By MD Uzzal Miah
text and images
*/

var logov1Image, logov2Image

function preload(){
	green_logoImage = loadImage("Green_Logo.jpg");
	blue_logoImage = loadImage("Blue_logo.jpg");
	red_logoImage = loadImage("red_logo.jpg");
	greenImage = loadImage("green.jpg");
	blueImage = loadImage("blue.jpg");
	redImage = loadImage("red.jpg");
}  
function setup(){
	createCanvas(900, 270);
	textAlign(CENTER, CENTER);
	textFont('Patua One');
	textSize(30);

}
function draw(){
	background('#7FFFD4');

	var w = width / 3;

	image(greenImage, 0, 0, w, height);
	image(blueImage,w, 0, w, height);
	image(redImage, w*2, 0, w, height);

	if (mouseIsPressed){
		if (mouseX < w){
			image(green_logoImage, 0, 0, w, height);
			fill("#139B0F");
			text("Uzzal Love to Listen Music.",0, 100, w, height)
		}	else if (mouseX < w * 2) {
			image(blue_logoImage, w, 0, w, height);
			fill("#3333FF");
			text("Uzzal Love to See Stars.",w, 100, w, height);
		} else {
			image(red_logoImage, w*2, 0, w, height);
			fill("#FF0000");
			text("Uzzal Love to Play Games.",w*2, 100, w, height)
		}
		
	}	
	

}