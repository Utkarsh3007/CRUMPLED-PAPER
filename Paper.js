class Paper {
    constructor(x, y,radius) {
        var option = {
        isStatic:false,
        density:17,
        resititution:0.8,
        friction:100
        }
        this.body = Matter.Bodies.circle(x, y,radius, option);
        this.body.radius=radius
        this.body.debug=true
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
    
        ellipseMode(CENTER)
        fill("purple")
        ellipse(pos.x,pos.y)                           
    }
}