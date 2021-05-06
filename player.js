class Player {
    constructor(x,y,radius){
        var option ={
            density:1,
            friction:0.5,
    isStatic:true 
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,option)
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode (CENTER)
        ellipse(0,0,this.radius,this.radius);
        pop()
    }
    move(a,b){
        this.body.x=this.body.x+a 
        this.body.y=this.body.y+b


    }
}
