class Row {
  constructor(i) {
    this.rowNum = i
    this.gap = 20
    this.letters = this.createLetters()
    this.currentLetterIdx=0
    this.isCurrentRow = false
  }
  
  createLetters() {
    let xOffset = (windowWidth/2) - (((letterW*5)+(this.gap*4))/2)
    let yOffset = 100
    return new Array(5).fill(null).map((_,i)=> (new Letter(i, xOffset+(i*(letterW+this.gap)), (this.rowNum*(letterH+this.gap))+yOffset)))
  }
  
  backspace() {
    if(this.currentLetterIdx>0) {this.currentLetterIdx-=1}
    this.letters[this.currentLetterIdx].letter=""
  }
  
  changeLetter(l) {
    if(this.currentLetterIdx>4) {return}
    this.letters[this.currentLetterIdx].letter=l.toUpperCase()
    this.currentLetterIdx+=1
  }
  
  getWord() {
    let word=""
    this.letters.forEach(letter=>{word+=letter.letter})
    return word
  }
  
  checkLetters() {
    let counts={}

    const s = this.getWord()
    
    //Correct word
    if(s==word) {gameState="END"}
    
    for(let i=0; i<s.length; i++) {
      //Letter has already been checked a sufficient amount of times
      if(s[i] in counts && counts[s[i]]>word.split(s[i]).length-2) {this.letters[i].c=color(142, 142, 142)}
      
      //Incorrect letter
      else if(!word.includes(s[i])) {this.letters[i].c=color(142, 142, 142)}
      
      //Correct letter and placement
      else if(s[i]==word[i]) {this.letters[i].c=color(0,255,0)}
      
      //Correct letter but incorrect placement
      else if(word.includes(s[i])) {this.letters[i].c=color(232, 197, 1)}
      
      if(!(s[i] in counts)) {counts[s[i]]=0}
      counts[s[i]]++
    }
  }
  
  draw() {
    this.letters.forEach(letter=> {
      letter.draw()
    })
  }
}
