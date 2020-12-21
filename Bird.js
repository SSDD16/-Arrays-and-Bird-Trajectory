class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.array = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x > 200 && this.body.velocity.x > 10 ){
    var position = [this.body.position.x, this.body.position.y]
    this.array.push(position)
   }
  for(var I = 0; I < this.array.length; I++){

    image(this.smokeimage,this.array[I][0],this.array[I][1])


    }
  }
}
