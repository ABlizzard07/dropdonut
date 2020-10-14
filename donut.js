class Donut{
    constructor(x, y,r) {

        var options ={
            isStatic: true,
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options); 
        this.image = loadImage("donut.png");

        World.add(world, this.body);
        World.add(world, this.image);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }

}