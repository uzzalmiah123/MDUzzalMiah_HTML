/* 
Self Portrait v1 
By MD Uzzal Miah
*/
// Global scope

var x = 460; // character origin
var y = 150;

var eyeSize = 100;
var mouthSize = eyeSize;
var lookUP = 100;
var ear;

var faceRed = 0;
var faceGreen = 180;
var faceBlue = 140;

function setup() {
	createCanvas(650, 360);
	x = width / 2;
}

function draw() {
	background("#CD5C5C");

	//eye movement 

 	lookUP = map(mouseX, 0, height, 0,300 );
lookUP = constrain(lookUP, 240, 280);




// ear movement.
ear = map(mouseX , 0, height, width,200 );
ear = constrain(ear, 246, 280);

	// ear 
	fill(218,159,83); // Left ear
	arc(ear - 35, y - 20, 60, 60, 4, PI + QUARTER_PI);
     
     //Right Ear
	fill(218,159,83);
	arc(ear + 157, y - 20, 60, 60, 4, PI + QUARTER_PI);

	//face
	noStroke();
	fill(faceRed,faceGreen,faceBlue); // Th
	triangle(x - 160,y - 95, x + 140, y- 90, x, y + 200)

	// eyes

	// left eye
	fill(220, 220, 220); // Gainsboro
	circle(x - 60, y - 20, eyeSize);
	fill(0); // Black
	circle(lookUP, y - 20, eyeSize / 2);


    //Right eay
    fill(220, 220, 220); // Gainsboro
	ellipse(x + 50, y - 20, eyeSize);
    fill(0); // Black
	ellipse(lookUP + 110, y - 20, eyeSize / 2);


	
	

    // mouth
    stroke("#D68910");
    strokeWeight(10)
    noFill();

    var mouthHeight = map(mouseY, 0, height, mouthSize / 3.3, mouthSize);

	rect(x - 50, y + 80, mouthSize, mouthHeight, mouthSize / 10);
    
    


	// hair
	stroke("Black");
	strokeWeight(3);
    line( x - 70, y - 100, x - 50, y - 80);
	line( x - 60, y - 100, x - 40, y - 80);
	line( x - 50, y - 100, x - 30, y - 80);
	line( x - 40, y - 100, x - 20, y - 80);
	line( x - 30, y - 100, x - 10, y - 80);
	line( x - 20, y - 100, x, y - 80);
	line( x - 10, y - 100, x + 10, y - 80);
	line( x, y - 100, x + 20, y - 80);
	line( x + 10, y - 100, x + 30, y - 80);
	line( x + 20, y - 100, x + 40, y - 80);
	line( x + 30, y - 100, x + 50, y - 80);
	line( x + 40, y - 100, x + 60, y - 80);
	line( x + 50, y - 100, x + 70, y - 80);




	//Beard

	line( x - 40, y + 70, x - 50, y + 80);
	line( x - 30, y + 70, x - 40, y + 80);
	line( x - 20, y + 70, x - 30, y + 80);
	line( x - 10, y + 70, x - 20, y + 80);
	line( x, y + 70,x - 10, y + 80);
	line( x + 10, y + 70, x, y + 80);
	line( x + 20, y + 70, x + 10, y + 80);
	line( x + 30, y + 70, x + 20, y + 80);
	line( x + 40, y + 70, x + 30, y + 80);
	line( x + 50, y + 70, x + 40, y + 80);
	line( x + 60, y + 70, x + 50, y + 80);


}