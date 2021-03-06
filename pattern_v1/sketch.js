/*
	pattern version 2
	generative pattern
	using random
*/

function setup() {
	createCanvas(600, 340);
	rectMode(CENTER);
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern() {
	background('#87ceeb');

//sun 
noStroke();
fill('#FFFF33');
ellipse(250, 50, 60, 60);



	// big bulding 
	for (let x = random(-200); x < width; x += random(50, 100)) {
		//colors
		let r = random(100);
		let g = random(50);
		let b = random(100);
		fill(r, g, b); 
		noStroke();
		let y = random(70, 50);
		let w = random(300, 400);
		rect(x, height / 1.2,  y, height);

//Smaill Bulding
for (let x = 0; x < width; x += random(50, 200)) {
		let r = random(255);
		let g = random(255);
		let b = random(255);
		fill(r, g, b); 
		let y = random(70);
		let w = random(5, 10);
		let h = random(40, 100);
		rect(x, height - y, h);
}

	}
	// ground
	fill(0, 128, 0);
	rect(300, 385, width, height/2);
//gress
	for (let x = 0; x < width; x += random(2, 10)) {
		fill('#9ACD32');
		let y = random(50);
		let w = random(2, 2);
		let h = random(8, 18);
		rect(x, height - y, w, h);
	}
	// trees
	for (let x = 0; x < width; x += random(10, 100)) {
		fill('rosybrown');
		let y = random(70);
		let w = random(5, 10);
		let h = random(40, 100);
		rect(x, height - y, w, h);



		// random green
		var r = random(50);
		var g = random(50, 200);
		var b = random(50);
		
		fill(r, g, b);
		let treeWidth = random(10, 40);
		let treeHeight = random(treeWidth, treeWidth * 2);
		ellipse(x, height - y - h/2, treeWidth, treeHeight);
	}

	// clouds
	var cloudNumber = random(3, 10);
	for (let i = 0; i < cloudNumber; i++) {
		let x = random(width);
		let y = random(height/2);
		let w = random(40, 80);
		let h = random(20, 40);
		fill('white');

		var clusterNumber = random(2,4);
		for (let j = 0; j < clusterNumber; j++) {
			ellipse(x + random(-20, 20), y + random(-5, 5), w, h);
		}
		
	}
}