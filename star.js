class Star{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      this.image = loadImage("star.png");
      World.add(world, this.body);
      World.add(world, this.image);
    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}