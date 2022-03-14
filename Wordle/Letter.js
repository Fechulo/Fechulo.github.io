class Letter {
  constructor(i, x=0, y=0, letter="", c=color(12, 12, 13)) {
    this.letterNum = i
    this.letter = letter
    this.c = c
    this.x = x
    this.y = y
  }
  draw() {
    //Box
    push()
    fill(this.c)
    stroke(58, 58, 60)
    strokeWeight(5)
    rect(this.x, this.y, letterW, letterH)
    pop()
    
    //Letter
    push()
    fill(255, 255, 255)
    textSize(65)
    textAlign(CENTER)
    text(this.letter, this.x+(letterW/2), this.y+((letterH/4)*3)+5)
    pop()
  }
}
