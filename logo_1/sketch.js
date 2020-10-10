/* 
Logo V 1
By MD Uzzal Miah
text and images
*/
var title = 'Uzzal'
var description = "Hi my name is Uzzal. Uzzal's real meaning in english is “Bright''. This is my first website and logo design . I hope you all are going to like it."

var logoImage
function preload(){
	logoImage = loadImage('Logo-U.jpg');
}

function setup(){
	createCanvas(700, 550);
}
function draw(){
	background('#7FFFD4');

	//image //
   
   image(logoImage,0, 0,width, height);

	textSize(100);
	fill('#8B0000');
	stroke('#FFE4C4');
	strokeWeight(5);
	textFont('Patua One');
	textAlign(CENTER, TOP,);
	
	var len = title.length;
	var n = map(frameCount, 0, 30, 0, len);

	text(title.substring(0,n), width / 2 , height / 2 + 70);

	var titleWidth = textWidth(title);

    textSize(14);
    noStroke();
    fill(0);

	text(description, width / 2 - titleWidth / 2, height / 2 + 160, titleWidth );



}
