int r;
int g;
int b;
int x=(int)random(500);
int y=(int)random(500);
boolean paused=false;

void setup() {
  size(500, 500);
  background(255);
  r = (int)random(256);
  g = (int)random(256);
  b = (int)random(256);
  noStroke();
}

void draw() {
  if (paused==false) {

    x+=(int)random(-5, 5);
    y+=(int)random(-5, 5);
    r+=(int)random(-2, 2);
    g+=(int)random(-2, 2);
    b+=(int)random(-2, 2);

    if (x>500 || x<0 || y>500 || y<0) {
      x=(int)random(500);
      y=(int)random(500);
    }

    fill(r, g, b);
    ellipse(x, y, 5, 5);
  } 
}

void keyPressed() {
  if (key==' ') {
    paused=!paused;
  }
}
