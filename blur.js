/**
 * Created by Administrator on 2016/2/8.
 */
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();
var clippingRegion =  { x:400 , y:200 , r: 50};
var radius = 50;
image.src = "images/wallpaper-0032.jpg";
var leftMargin = 0, topMargin = 0 ;

image.onload = function (e) {
    initCanvas();
} ;
   function initCanvas(){
          clippingRegion = {  x:Math.random()*700 + radius ,
                             y:Math.random() * 500 + radius ,r:50};
         draw( image ,clippingRegion );
   }
   function draw( image ,clippingRegion){
         context.clearRect(0,0,canvas.width,canvas.height);

         context.save();
         setClippingRegion( clippingRegion );
         context.drawImage( image,0, 0 );

         context.restore();
   }
   function setClippingRegion( clippingRegion ){
        context.beginPath();
        context.arc( clippingRegion.x,clippingRegion.y,clippingRegion.r,0,Math.PI * 2,false);
        context.clip();
   }
   function reset(){
           initCanvas();
   }
   function show(){
    var animate = setInterval(
              function () {
                clippingRegion.r += 10;
                console.log("animate");
                if(clippingRegion.r > Math.max(canvas.width,canvas.height)) clearInterval(animate);
                draw(image,clippingRegion);
         },10);
   }