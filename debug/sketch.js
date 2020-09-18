/*
    debug exercise
*/

var faceSize = 100 * 3;

function setup() {
    createCanvas(640, 480, 30);
    background(50);
    noStroke();
    fill("lightblue");
    ellipse(350, 320, faceSize); // face

    fill(0, 0, 0);
    ellipse (450, 250, 100); // right eye
    ellipse(350, 250, 100); // left eye
    ellipse(400, 400, 60, 20); // mouth

    fill("white");
    ellipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

    fill("black");
    textSize(28);
    textFont("monospace");
    text("Nice work!", 65, 110);
}
