/*
	pattern version 2
	generative pattern
	using random
*/

/*
	generative pattern
*/

function setup() {
	createCanvas(600, 400);
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern() {
		let r = random(300);
		let g = random(300);
		let b = random(300);

	background(r, g, b,);

// background("'#7FFFD4'")
	let w = random(5, 50);
	let h = w;
	

	for (let x = 0; x <= width + w; x += w) { // columns
		for (let y = 0; y <= height + h; y += h) { // rows
			
		
			
		let r = random(3);
		if (r < 1) {

// diagonal top-left to bottom-right
		line(x, y, x + w, y + h);
		} else if (r < 10) {

			let r = random(200);
			let g = random(200);
			let b = random(200);
			noFill();
			stroke(r, g, b,1000);
			strokeWeight(5);



// diagonal top-right to bottom-left
		line(x + w, y, x, y + h);
		} else if (r < 2)  {
				



				// straigh across top
				
		line(x, y, x + 10, y + 10);
		} else {
		
			arc(x + w, y, w * 7, h * 10, PI * 0.5, PI);
			}
			
			

		}	
	}
}