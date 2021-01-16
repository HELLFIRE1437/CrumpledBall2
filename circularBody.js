class circularBody {
    constructor(x,y,radius){
        var options = {
            restitution : 0.8,
            density : 0.5 ,
            friction : 10
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("Images/paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position ;
        var angle = this.body.angle ;
        push();
        fill("pink");
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,2*this.radius,2*this.radius);
        pop();
    }
}