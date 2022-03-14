class Grid {
  constructor() {
    this.rows = this.createRows()
    this.rows[0].isCurrentRow=true
    this.currentRowIdx=0
  }
  
  createRows() {
    return new Array(6).fill(null).map((_,i)=> (new Row(i)))
  }
  
  changeCurrentRow() {
    if(this.rows[this.currentRowIdx].currentLetterIdx<5) {return}
    this.rows[this.currentRowIdx].isCurrentRow=true
    this.rows[this.currentRowIdx].checkLetters()
    this.currentRowIdx++
  }
  
  draw() {
    this.rows.forEach(row=> {
      row.draw()
    })
  }
}
