// Fainal Projec

var button;
var r ;
var g ;
var b ;
var y = 250;
var x = 300;
var s = 250
// Sound
//Alphabet.
	var aSound;
	var bSound;
	var cSound;
	var dSound;
	var eSound;
	var fSound;
	var gSound;
	var hSound;
	var iSound;
	var jSound;
	var kSound;
	var lSound;
	var mSound;
	var nSound;
	var oSound;
	var pSound;
	var qSound;
	var rSound;
	var sSound;
	var tSound;
	var uSound;
	var vSound;
	var wSound;
	var xSound;
	var ySound;
	var zSound;
// sound of Numbers
	var oneSound;
	var twoSound;
	var threeSound;
	var fourSound;
	var fiveSound;
	var sixSound;
	var sevenSound;
	var eightSound;
	var nineSound;
	var zeroSound;
// COMMENT KEY VAR
	var altSound;
	var backqouteSound;
	var backshalsSound;
	var backspaceSound
	var capslockSound;
	var closesquerSound;
	var ctrlSound;
	var destSound;
	var dotSound;
	var downSound 
	var enterSound
	var equelSound;
	var leftSound;
	var opensquerSound;
	var rightSound;
	var shalsSound;
	var shiftSound;
	var simiSound;
	var sinqoteSound;
	var spaceSound;
	var tabSound;
	var upSound;
	var windowSound;
	var comaSound;
// key image 
	var upkeyImage;
	var downkeyImage;
	var leftkeyImage;
	var rightkeyImage;


function preload() {
// Sound

	aSound = loadSound('a.wav'); // A
	bSound = loadSound('b.wav'); // B
	cSound = loadSound('c.wav'); // C
	dSound = loadSound('d.wav'); // D
	eSound = loadSound('e.wav'); // E
	fSound = loadSound('f.wav'); // F
	gSound = loadSound('g.wav'); // G
	hSound = loadSound('h.wav'); // H
	iSound = loadSound('i.wav'); // I
	jSound = loadSound('j.wav'); // J
	kSound = loadSound('k.wav'); // K
	lSound = loadSound('l.wav'); // L
	mSound = loadSound('m.wav'); // M
	nSound = loadSound('n.wav'); // N
	oSound = loadSound('o.wav'); // O
	pSound = loadSound('p.wav'); // P
	qSound = loadSound('q.wav'); // Q
	rSound = loadSound('r.wav'); // R
	sSound = loadSound('s.wav'); // S
	tSound = loadSound('t.wav'); // T
	uSound = loadSound('u.wav'); // U
	vSound = loadSound('v.wav'); // V
	wSound = loadSound('w.wav'); // W
	xSound = loadSound('x.wav'); // X
	ySound = loadSound('y.wav'); // Y
	zSound = loadSound('z.wav'); // Z

// Numbers Sound

	oneSound = loadSound('one.wav'); // 1
	twoSound = loadSound('two.wav'); // 2
	threeSound = loadSound('three.wav'); // 3
	fourSound = loadSound('four.wav'); // 4
	fiveSound = loadSound('five.wav'); // 5
	sixSound = loadSound('six.wav'); // 6
	sevenSound = loadSound('seven.wav'); // 7
	eightSound = loadSound('eight.wav'); // 8
	nineSound = loadSound('nine.wav'); // 9
	zeroSound = loadSound('zero.wav'); // 0

// COmmond word sound
	comaSound = loadSound('coma.wav'); // , KEY
	altSound = loadSound('alt.wav'); // ALT
	backqouteSound = loadSound('backqoute.wav'); // `` KEY 
	backshalsSound = loadSound('backshals.wav'); // \ KEY SPUND
	backspaceSound = loadSound('backspace.wav'); // BACKSPACE KEY
	capslockSound = loadSound('capslock.wav'); // CAPS LOCK KEY
	closesquerSound = loadSound('closesquer.wav'); // ] SKEY
	dotSound = loadSound('dot.wav'); // . Key
	downSound = loadSound('down.wav'); // DOWN ARROW Key
	enterSound = loadSound('enter.wav'); // enter
	equelSound = loadSound('equel.wav'); // = Key
	leftSound = loadSound('left.wav'); // LEFT ARROW KEY
	opensquerSound = loadSound('opensquer.wav'); // [ KEY
	rightSound = loadSound('right.wav'); // RIGHT ARROW KEY
	shalsSound = loadSound('shals.wav'); // / KEY
	shiftSound = loadSound('shift.wav'); // SHAFT KEY
	simiSound = loadSound('simi.wav'); // ; KEY
	sinqoteSound = loadSound('sinqote.wav'); // '' KEY
	spaceSound = loadSound('space.wav'); // SPACE
	tabSound = loadSound('tab.wav'); // TAB
	upSound = loadSound('up.wav'); // UPPER ARROW KEY
	windowSound = loadSound('window.wav'); // WINDOW KEY
	ctrlSound = loadSound('ctrl.wav'); // CTRL KEY
	destSound = loadSound('dest.wav'); // - key

// Image 
	upkeyImage = loadImage('upkey.png');
	downkeyImage = loadImage('downkey.png');
	leftkeyImage = loadImage('leftkey.png');
	rightkeyImage = loadImage('rightkey.png');


}

function setup() {
	createCanvas(1000, 700);
	textSize(200);
	 r = random(300);
	 g = random(300);
	 b = random(300);


	button = createButton("pause");
	button.mousePressed(togglePlaying);
}






function mousePressed() {
	r = random(300);
	 g = random(300);
	 b = random(300);
}

function draw() {
	
	background(r, g, b,);

	// Animation 
	if (y < height){
		y += 7;

	}
	else {
		x += 10;
	}
textFont('Patua One');
fill('black')
textSize(150)

// Alphabet.

	if (hSound.isPlaying()){
    text("H",x, y,);
  	}
	if (aSound.isPlaying()){
			text("A",x, y,);

	}
	if (bSound.isPlaying()){
		    text("B",x, y,);
	 }
	 
	if (cSound.isPlaying()){
		    text("C",x, y,);
	 }
	if (dSound.isPlaying()){
		    text("D",x, y,);
	 }
	 if (eSound.isPlaying()){
		    text("E",x, y,);
	 }
	 
	 if (fSound.isPlaying()){
		   text("F",x, y,);
	 }
	 
	 if (gSound.isPlaying()){
		    text("G",x, y,);
	 }
	 if (iSound.isPlaying()){
		    text("I",x, y,);
	 }
	 if (jSound.isPlaying()){
		    text("J",x, y,);
	 }
	 if (kSound.isPlaying()){
		    text("K",x, y,);
	 }
	 if (lSound.isPlaying()){
		    text("L",x, y,);
	 }
	 if (mSound.isPlaying()){
		    text("M",x, y,);
	 }
	 if (nSound.isPlaying()){
		    text("N",x, y,);
	 }
	 if (oSound.isPlaying()){
		    text("O",x, y,);
	 }
	 if (pSound.isPlaying()){
		    text("P",x, y,);
	 }
	 if (qSound.isPlaying()){
		    text("Q",x, y,);y
	 }
	 if (rSound.isPlaying()){
		    text("R",x, y,);
	 }
	 if (sSound.isPlaying()){
		    text("S",x, y,);
	 }
	 if (tSound.isPlaying()){
		    text("T",x, y,);
	 }
	 if (uSound.isPlaying()){
		    text("U",x, y,);
	 }
	 if (vSound.isPlaying()){
		    text("V",x, y,);
	 }
	 if (wSound.isPlaying()){
		    text("W",x, y,);
	 }
	 if (xSound.isPlaying()){
		    text("X",x, y,);
	 }
	 if (ySound.isPlaying()){
		    text("Y",x, y,);
	 }
	 if (zSound.isPlaying()){
		    text("Z",x, y,);
	 }

// Numbers
	if (oneSound.isPlaying()){
		    text("1",500, y,);
	 }
	 if (twoSound.isPlaying()){
		    text("2",500, y,);
	 }
	 if (threeSound.isPlaying()){
		    text("3",500, y,);
	 }
	 if (fourSound.isPlaying()){
		    text("4",500, y,);
	 }
	 if (fiveSound.isPlaying()){
		    text("5",500, y,);
	 }
	 if (sixSound.isPlaying()){
		    text("6",500, y,);
	 }
	 if (sevenSound.isPlaying()){
		    text("7",500, y,);
	 }
	 if (eightSound.isPlaying()){
		    text("8",500, y,);
	 }
	 if (nineSound.isPlaying()){
		    text("9",500, y,);
	 }
	 if (zeroSound.isPlaying()){
		    text("0",500, y,);
	 }

// COMMENT kEY 
	 if (comaSound.isPlaying()){
		    text(",",x, y,);
	 }
	 if (altSound.isPlaying()){
		    text("Alt",x, y,);
	 }
	 if (backqouteSound.isPlaying()){
		    text("`",x, y,);
	 }
	 if (backshalsSound.isPlaying()){
		    text(" \\ ",500, y,);
	 }
	 if (backspaceSound.isPlaying()){
		    text("Backspace",250, y,);
	 }
	 if (capslockSound.isPlaying()){
		    text("Caps Lock",250, y,);
	 }
	 if (closesquerSound.isPlaying()){
		    text("]",x, y,);
	 }
	 if (dotSound.isPlaying()){
		    text(".",500, y,);
	 }
	 if (upSound.isPlaying()){
		    image(upkeyImage, x, y, 150, 150);
	 }
	 if (downSound.isPlaying()){
		    image(downkeyImage, x, y, 150, 150);
	 }
	 if (leftSound.isPlaying()){
		    image(leftkeyImage, x, y, 150, 150);
	 }
	 if (rightSound.isPlaying()){
		    image(rightkeyImage, x, y, 150, 150);
	 }
	 if (enterSound.isPlaying()){
		    text("Enter",300, y,);
	 }
	 if (equelSound.isPlaying()){
		    text("=",500, y,);
	 }
	 if (opensquerSound.isPlaying()){
		    text("[",x, y,);
	 }
	 if (shalsSound.isPlaying()){
		    text("/",500, y,);
	 }
	 if (shiftSound.isPlaying()){
		    text("Shift",350, y,);
	 }
	 if (simiSound.isPlaying()){
		    text(";",500, y,);
	 }
	 if (sinqoteSound.isPlaying()){
		    text("'",500, y,);
	 }
	 if (spaceSound.isPlaying()){
		    text("Space",250, y,);
	 }
	 if (tabSound.isPlaying()){
		    text("Tab",500, y,);
	 }
	 if (windowSound.isPlaying()){
		    text("Window",250, y,);
	 }
	 if (ctrlSound.isPlaying()){
		    text("Ctrl",500, y,);
	 }
	  if (destSound.isPlaying()){
		    text("-",500, y,);
	 }
	 
}









function keyPressed(){
	y = 250;
	x = 500;

//Alphabet
	if (keyCode == 72){ // H
		hSound.play();
	}
	if (keyCode == 65){ // A
		aSound.play();
	}
	if (keyCode == 66){ // B
		bSound.play();
	}
	if (keyCode == 67){ // C
		cSound.play();
	}
	if (keyCode == 68){ // D
		dSound.play();
	}
	if (keyCode == 69){ // E
		eSound.play();
	}
	if (keyCode == 70){ // F
		fSound.play();
	} 
	if (keyCode == 71){ // G
		gSound.play();
	}
	if (keyCode == 73){ // I
		iSound.play();
	}
	if (keyCode == 74){ // j
		jSound.play();
	}
	if (keyCode == 75){ // K
		kSound.play();
	}
	if (keyCode == 76){ // L
		lSound.play();
	}
	if (keyCode == 77){ // M
		mSound.play();
	}
	if (keyCode == 78){ // N
		nSound.play();
	}
	if (keyCode == 79){ // O
		oSound.play();
	}
	if (keyCode == 80){ // P
		pSound.play();
	}
	if (keyCode == 81){ // Q
		qSound.play();
	}
	if (keyCode == 82){ // R
		rSound.play();
	}
	if (keyCode == 83){ // S
		sSound.play();
	}
	if (keyCode == 84){ // T
		tSound.play();
	}
	if (keyCode == 85){ // U
		uSound.play();
	}
	if (keyCode == 86){ // V
		vSound.play();
	}
	if (keyCode == 87){ // W
		wSound.play();
	}
	if (keyCode == 88){ // X
		xSound.play();
	}
	if (keyCode == 89){ // Y
		ySound.play();
	}
	if (keyCode == 90){ // Z
		zSound.play();
	}

//Numbers sound
	if (keyCode == 49){ // 1
		oneSound.play();
	}
	if (keyCode == 50){ // 2
		twoSound.play();
	}
	if (keyCode == 51){ // 3
		threeSound.play();
	}
	if (keyCode == 52){ // 4
		fourSound.play();
	}
	if (keyCode == 53){ // 5
		fiveSound.play();
	}
	if (keyCode == 54){ // 6
		sixSound.play();
	}
	if (keyCode == 55){ // 7
		sevenSound.play();
	}
	if (keyCode == 56){ // 8
		eightSound.play();
	}
	if (keyCode == 57){ // 9
		nineSound.play();
	}
	if (keyCode == 48){ // 0
		zeroSound.play();
	}

// COMMON KEY CODE

	if (keyCode == 188){ // , key
		comaSound.play();
	}
	if (keyCode == 220){ // , \ key
		backshalsSound.play();
	}
	if (keyCode == 38){ // , Up arrow key
		upSound.play();
	}
	if (keyCode == 40){ // , down arrow key
		downSound.play();
	}
	if (keyCode == 37){ // , left arrow key
		leftSound.play();
	}
	if (keyCode == 39){ // , right arrow key
		rightSound.play();
	}
	if (keyCode == 13){ // , Enter
		enterSound.play();
	}
	if (keyCode == 187){ // , =
		equelSound.play();
	}
	if (keyCode == 219){ // , [
		opensquerSound.play();
	}
	if (keyCode == 16){ // , Shift
		shiftSound.play();
	}
	if (keyCode == 191){ // , /
		shalsSound.play();
	}
	if (keyCode == 186){ // , ;
		simiSound.play();
	}
	if (keyCode == 222){ // , ''
		sinqoteSound.play();
	}
	if (keyCode == 32){ // , Space
		spaceSound.play();
	}
	if (keyCode == 9){ // , Tab
		tabSound.play();
	}
	if (keyCode == 91){ // , Window
		windowSound.play();
	}
	if (keyCode == 17){ // , Ctrl
		ctrlSound.play();
	}
	if (keyCode == 191){ // , /
		destSound.play();
	}
	if (keyCode == 190){ // , . 
		dotSound.play();
	}
	if (keyCode == 18){ // , Alt
		altSound.play();
	}
	if (keyCode == 192){ // , ``
		backqouteSound.play();
	}
	if (keyCode == 20){ // , Caps Lock
		capslockSound.play();
	}
	if (keyCode == 221){ // , ]
		closesquerSound.play();
	}
	if (keyCode == 8){ // , Backspace
		backspaceSound.play();
	}
	if (keyCode == 189){ // , -
		destSound.play();
	}

}

function togglePlaying(){
	birdsSound.pause();
	windySound.pause();
	rainSound.pause();
	pianoSound.pause();
}
