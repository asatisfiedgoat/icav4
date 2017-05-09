var bubbles = [];
var dogs = [];
var i=0;
var q=1;
var r = 100;
var slider;
var wor;
var data;

function preload(){
  for(var i = 0; i<118; i++){
    dogs[i] = loadImage("dog"+i+".jpg")
  }
     data = loadJSON("ica.json");
}

function setup() {
  canvas = createCanvas(500,400);
  canvas.position(150,100);

  slider =  createSlider(q,r,0);
   slider.position(300,550);
   slider.size(200);
  
   wor = createP();
 wor.position(380,505);
 
 
}

function draw() {
 background(0);

 //var value;


 var val = slider.value();
 
 var x1 = floor(map(val,q,r,0,dogs.length-1));
 
 var b = new Bubble(0,0, dogs[x1]);
    bubbles.push(b);
    //print(x1);
    var ica = data.icas[x1].time;
   wor.html(ica);
  
    for (var i = 0; i <bubbles.length; i++) {
 
        bubbles[i].display();
    }

}
