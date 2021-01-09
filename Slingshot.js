class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png") 
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA=body;
    }

    display(){
       

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
                strokeWeight(17);
                stroke(48, 22, 8)
                
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
                image(birdImage,pointA.x-28 ,pointA.y-22,50,50)
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
                image(this.sling3,pointA.x-30,pointA.y-17,15,30)
            }
            
                else{
                    strokeWeight(3);
                stroke(48, 22, 8)
                line(pointA.x+20, pointA.y, pointB.x-20, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
                image(this.sling3,pointA.x+20,pointA.y-15,15,30)

                }
                
        }
        image(this.sling1,200,20)
        image(this.sling2,170,20)
    }
    
}