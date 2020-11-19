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
	background(' #9099a1');



for (let x = random(-200); x < width; x += random(100, 200)) {
		// brown color
		let r = random(50, 10);
		let g = random(100, 10);
		let b = random(30,10);
		fill(r, g, b, 60); 
		noStroke();
		let y = random(50, 200);
		let w = random(200, 300);
		triangle(x, height, x + w/2, y, x + w, height);
	}


// big bulding 
	for (let x = random(-200); x < width; x += random(50, 100)) {
		filter(BLUR, 1);
		let r = random(40);
		let g = random(40);
		let b = random(40);
		fill(r, g, b,); 
		noStroke();
		let y = random(70, 50);
		let w = random(300, 400);
		rect(x, height / 1.2,  y, height);

//Smaill Bulding
for (let x = 0; x < width; x += random(50, 200)) {
		let r = random(90);
		let g = random(90);
		let b = random(90);
		fill(r, g, b); 
		let y = random(70);
		let w = random(5, 10);
		let h = random(40, 100);
		rect(x, height - y, h);
}

	}
	// ground
	fill("#094914");
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
	for (let x = 0; x < width; x += random(2, 10)) {
		fill('#aec6cf');
		let y = random(10, 400);
		let w = random(2, 1);
		let h = random(8, 10);
		rect(x, height - y, w, h);
}
	// clouds
	var cloudNumber = random(3, 10);
	for (let i = 0; i < cloudNumber; i++) {
		let x = random(width);
		let y = random(height/2);
		let w = random(40, 80);
		let h = random(20, 40);
		fill('#d6d5c5');

		var clusterNumber = random(2,4);
		for (let j = 0; j < clusterNumber; j++) {
			ellipse(x + random(-20, 20), y + random(-5, 5), w, h);
		}
		
	}
}

