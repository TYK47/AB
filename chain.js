class Chain{
    constructor(bodyA,bodyB){
        var opition  = {
            bodyA: bodyA, bodyB: bodyB, length: 10, stiffness:0.5
        }
        this.chain = Matter.Constraint.create(opition)
        World.add(world,this.chain)
    }
}