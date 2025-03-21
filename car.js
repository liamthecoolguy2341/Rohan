class Car{
  constructor(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.speed=0;
    this.accel=0.1;
    this.Gasoline=10;
    this.friction=0.05;
    this.angle=0;
    this.controls =new Controls();
    
  }
  update(){
    if(this.controls.forward){
      this.speed+=this.accel;
    }
    if(this.controls.reverse){
      this.speed-=this.accel;
    }
    if(this.speed>this.Gasoline){
      this.speed=this.Gasoline;
    }
    if(this.speed>this.Gasoline/2){
      this.speed=-this.Gasoline/2;
    }
    if(this.speed>0){
      this.speed-=this.friction;
    }
    if(this.speed<0){
      this.speed+=this.friction;
    }
    if(Math.abs(this.speed)<this.friction){
      this.speed=0;
    }
    if(this.controls.left){
      this.angle+=0.03;
    }
    if(this.controls.right){
      this.angle-=0.03;
    }
  
    this.x-=Math.sin(this.angle)*this.speed;
    this.y-=Math.cos(this.angle)*this.speed;

  }
  drw(ctx){
    ctx.save();
    ctx.translate(this.x,this.y)
    ctx.rotate(-this.angle)
    ctx.beginPath();
    ctx.rect(
      -this.width/2,
      -this.height/2,
      this.width,
      this.height,
    );
    
    ctx.fill();
    ctx.restore();
  }
}
