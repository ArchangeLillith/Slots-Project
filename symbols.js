// Symbol classes will go here
class Symbol {
    constructor(){
        this.height = 0;
        this.width = 0;
        this.markedForDeletion = false;
    }
    //*copied from side scrolling game, all may not be applicable but a good basis
    // update(deltaTime){
        //movement
    //     this.x -= this.speedX + this.game.speed;
    //     this.y += this.speedY;
    //     if (this.frameTimer > this.frameInterval){
    //         this.frameTimer = 0;
    //         if (this.frameX < this.maxFrame)this.frameX++;
    //         else this.frameX = 0;
    //     } else {
    //         this.frameTimer += deltaTime;
    //     }
    //     if (this.x + this.width < 0) this.markedForDeletion = true;
    // }
    // draw(context){
    //     if (this.game.debug) context.strokeRect (this.x, this.y, this.width, this.height);
    //     context.drawImage(
    //         this.image,
    //         this.frameX * this.width,
    //         0,
    //         this.width,
    //         this.height,
    //         this.x,
    //         this.y,
    //         this.width,
    //         this.height
    //     )
    // }
}

class Otters extends Symbol {
    constructor(){
        super();
    }
}