var url = 'https://api.nytimes.com/svc/archive/v1/2018/10.json?api-key=EsRo1aFI0m0QMX4su1FczTSuXyQzPREG';
var lineX = 0;
var lineY = 0;
var lineZ = 0;
var counter= 0;
var timer;



function setup() {
  createCanvas(1655,150);

  timer = createP('1');
  interval = setInterval(timeIt,100);

  loadJSON(url, gotData);
}

function timeIt() {
    timer.html(counter);
    counter++;

    if(counter > 5664){
        counter = 0;
    }
}
  
//fornow
// function gotData(data){
//   var articles = data.response.docs;
//   //var headline = data.response.docs[2].headline.main;
//   var i=0; 
  
//   for (var j = 0 ; j < articles[i].keywords.rank ; j++);
//   createElement('h1', articles[i].headline.main);
//   createElement('h2', articles[i].keywords[j].value);
//   createP(articles[i].keywords[j].name);
//   createP(articles[i].pub_date);
  //setInterval(gotData, 1000);
  //i=i+1;
  
 }

 function draw() {
    background(50);

    stroke(255);
    strokeWeight(0.8);
    line(lineX, 0, lineX, height);
    strokeWeight(0.4);
    line(lineX-30, 0, lineX-30, height);
    lineX = lineX + 3;
    if (lineX > width) {
        lineX = 0;
    }
    stroke(255);
    strokeWeight(0.3);
    line(lineY, 0, lineY, height);
    strokeWeight(0.1);
    line(lineY-10, 0, lineY-10, height);
    lineY = lineY + 1;
    if (lineY > width) {
        lineY = 0;
    }
    stroke(255);
    strokeWeight(0.5);
    line(lineZ+10, 0, lineZ+10, height);
    lineZ = lineZ + 5;
    if (lineZ > width) {
        lineZ = 0; 
    }
    
   }

  // 10.24: 5665-5674
  // 10.25: 5687-5703
  // 10.01-10.23: 0-5664