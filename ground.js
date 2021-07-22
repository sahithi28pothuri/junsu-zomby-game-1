class Ground 
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic: true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    //translate(pos.x,pos.y);
    rectMode(CENTER);
    noStroke();
    fill(225,225,225);
    rect(pos.x,pos.y, this.w, this.h);
    pop();
  }
}
