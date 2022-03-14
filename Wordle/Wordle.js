const wordBank = [
	"HELLO", "SLATE", "CRANE", "RIGOR", "CODES", "MONTH"
]

let word

let grid

let letterW = 75
let letterH = 75

let gameState="PLAYING"

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	
	//Choose the word
	word = chooseRandomWord()
	// word="CODES"
	console.log(word)
	
	//Create the grid
	grid = new Grid()
}

function chooseRandomWord() {
	return random(wordBank)
}

function keyPressed() {
	if(keyCode===ENTER) {grid.changeCurrentRow()}
	else if(keyCode==BACKSPACE) {grid.rows[grid.currentRowIdx].backspace()}
	else {
		grid.rows[grid.currentRowIdx].changeLetter(key)
	}
}

function draw() {
	background(12,12,13)
	
	if(gameState=="PLAYING") {
		//Title text
		push()
		fill(255,255,255)
		textSize(50)
		textAlign(CENTER)
		text("Wordle", windowWidth/2, 70)
		pop()

		grid.draw()
	}
	
	if(gameState=="END") {
		push()
		fill(255,255,255)
		textSize(50)
		textAlign(CENTER)
		text("Correct!", windowWidth/2, 70)
		text("The word was "+word+"!", windowWidth/2, 130)
		text("The word was "+word+"!", windowWidth/2, 130)
		pop()
	}
}