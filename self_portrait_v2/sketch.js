/* 
Self Portrait v1 
By MD Uzzal Miah
*/

function setup() {
	createCanvas(650, 360);
}

function draw() {
	background("#34495E");

	// ear 
	fill(218,159,83); // Left ear
	arc(350, 130, 60, 60, 4, PI + QUARTER_PI);
     
     //Right Ear
	fill(218,159,83);
	arc(557, 130, 60, 60, 4, PI + QUARTER_PI);

	//face
	noStroke();
	fill(210,180,140); // Th
	triangle(300, 55, 600, 60, 460, 350)

	// eyes

	// Right 
	fill(220, 220, 220); // Gainsboro
	circle(400, 130, 100);
	fill(0); // Black
	circle(400, 130, 50);

    //Left
    fill(220, 220, 220); // Gainsboro
	ellipse(520, 130, 100, 50);
    fill(0); // Black
	ellipse(520, 130, 60, 30);


	
	

    // mouth
    stroke("#D68910");
    strokeWeight(10)
    noFill();
	rect(410, 230, 100, 30, 10);
    



	// hair
	stroke("Black");
	strokeWeight(3);
    line( 390, 50, 410, 70);
	line( 400, 50, 420, 70);
	line( 410, 50, 430, 70);
	line( 420, 50, 440, 70);
	line( 430, 50, 450, 70);
	line( 440, 50, 460, 70);
	line( 450, 50, 470, 70);
	line( 460, 50, 480, 70);
	line( 470, 50, 490, 70);
	line( 480, 50, 500, 70);
	line( 490, 50, 510, 70);
	line( 500, 50, 520, 70);
	line( 510, 50, 530, 70);



	//Beard

	line( 420, 220, 410, 230);
	line( 430, 220, 420, 230);
	line( 440, 220, 430, 230);
	line( 450, 220, 440, 230);
	line( 460, 220, 450, 230);
	line( 470, 220, 460, 230);
	line( 480, 220, 470, 230);
	line( 490, 220, 480, 230);
	line( 500, 220, 490, 230);
	line( 510, 220, 500, 230);
	line( 520, 220, 510, 230);




}