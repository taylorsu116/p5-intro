var url = 'https://api.nytimes.com/svc/archive/v1/2018/10.json?api-key=EsRo1aFI0m0QMX4su1FczTSuXyQzPREG';
var lineX = 0;
var lineY = 0;
var lineZ = 0;
var titles =[];
var date = [];
var articlenum=0;
let xoff = 0.0;

function preload(){
    loadJSON(url, gotData);
}

function setup() {
  createCanvas(windowWidth-20,windowHeight-20);
  setInterval(increment,50);
  noiseSeed(99);
  stroke(0,5); 
}

function gotData(data){
  var articles = data.response.docs;

  for (let k = 0; k < 5674; k++){
    titles[k] = articles[k].headline.main;
    date[k] = articles[k].pub_date;
    }
  }

  function draw() {
    background(255);
    
    xoff = xoff + 0.005
    let n = noise(xoff)*width;

    fill(50);
    rect(10,10,1655,600);
    stroke(255);
    strokeWeight(0.2);
    line(lineX, 0, lineX, height/6);
    strokeWeight(0.8);
    line(lineX-n, 0, lineX-n, height/6);
    strokeWeight(0.4);
    line(lineX+n, 0, lineX+n, height/6);
    strokeWeight(0.5);
    line(n+100, 0, n+100, height/6);
    lineX = lineX + 1;
    if (lineX > width) {
        lineX = 0;
    }
    stroke(255);
    strokeWeight(0.3);
    line(n, 0, n, height/6);
    strokeWeight(0.1);
    line(lineY-n, 0, lineY-n, height/6);
    strokeWeight(0.1);
    line(lineY, 0, lineY, height/6);
    strokeWeight(0.1);
    line(lineY+n/2, 0, lineY+n/2, height/6);
    strokeWeight(0.1);
    line(n+10, 0, n+10, height/6);
    lineY = lineY + 0.5;
    if (lineY > width) {
        lineY = 0;
    }
    stroke(255);
    strokeWeight(0.5);
    line(lineZ, 0, lineZ, height/6);
    strokeWeight(0.5);
    line(lineZ+n/10, 0, lineZ+n/10, height/6);
    lineZ = lineZ + 2;
    if (lineZ > width) {
        lineZ = 0; 
    }
    stroke(255);
    strokeWeight(0.5);
    line(n/2+400, 0, n/2+400, height/6);

    fill(255);
    noStroke();
    textFont('Times New Roman')
    textStyle(NORMAL);
    textSize(25);
    textAlign(LEFT);
    text('New York Times -',45,200);

    fill(255);
    noStroke();
    textFont('Times New Roman')
    textStyle(BOLD);
    textSize(45);
    textAlign(LEFT);
    text(titles[articlenum],45,250);

    textSize(18);
    textFont('Courier New')
    textStyle(NORMAL);
    textAlign(LEFT);
    text(date[articlenum],45,300);

    textSize(14);
    textFont('Courier New')
    textStyle(NORMAL);
    textAlign(RIGHT);
    text('It was just a "normal" day.',1610,400);
    text('But my time stopped at that night.',1610,420);
    text("And I pretended it was just one day as everyone else's." ,1610,440);
    
    filter(INVERT);
   }

   function increment(){
    articlenum++;
    if(articlenum == titles.length){
        articlenum=0;
    }
   }
   function limit(){
       if(articlenum == titles.length){
           articlenum=0;
       }
   }

