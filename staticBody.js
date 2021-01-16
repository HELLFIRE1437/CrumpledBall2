class staticBody {
    constructor(x,y,width,height,angle=0) {
      var options = {
          isStatic: true ,
          restitution : 0.65 ,
          density : 0.95 ,
          friction : 10
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rectMode(CENTER);
      translate(pos.x,pos.y);
      rotate(angle);   
      rect(0, 0, this.width, this.height);
      pop();
    }
  }