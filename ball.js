class Ball {
    constructor(x, y,radius) {
      var options = {
         'restitution':1,
          'friction':1.5,
          'density':1.0,
          'isStatic':false
      }
      this.body = Bodies.circle(x, y,radius, options);
     this.radius=radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER)
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    
     
      pop();
    }
  };