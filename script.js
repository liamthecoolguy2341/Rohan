const can = document.getElementById("C");
can.width = 200;
const ctx = can.getContext("2d");
const car =new Car(100,100,30,50)
car.drw(ctx)
animate();

function animate(){
  car.update();
  can.height = window.innerHeight;
  car.drw(ctx);
  requestAnimationFrame(animate)
}