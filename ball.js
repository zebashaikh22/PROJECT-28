class Ball {
    constructor(){
       var options = {
           restitution:0,
           friction:0,
           density:1.2,
           isStatic:true
       } 

       this.body = Bodies.circle(140,150,25,options);
       this.width = 33;
       this.image = loadImage("ball.png")
       World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        imageMode(CENTER);
        fill("white");
        rotate();
        image(this.image,pos.x, pos.y,33,33);
    }
}