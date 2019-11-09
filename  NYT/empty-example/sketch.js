var url = 'https://api.nytimes.com/svc/archive/v1/2018/10.json?api-key=EsRo1aFI0m0QMX4su1FczTSuXyQzPREG';
var lineX = 0;
var lineY = 0;
var lineZ = 0;
var counter= 0;
var timer;
var titles=[];
var articlenum=0;
// var articles = data.response.docs;


function preload(){

    loadJSON(url, gotData);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  timer = createP('1');
  setInterval(increment,1000);

}

function timeIt() {
    timer.html(counter);
    counter++;

    if(counter > 5664){
        counter = 0;
    }
}
  

function gotData(data){
  var articles = data.response.docs;
  //var headline = data.response.docs[2].headline.main;
  var i=0; 
  i++;
  console.log(`number counter`+ i);
  for (let k = 0; k < articles.length; k++){
      titles[k] = articles[k].headline.main;
  }
      

      
  
  console.log(titles[0]);
  console.log(`here`);
//   for (var j = 0 ; j < articles[i].keywords.rank ; j++);
//   createElement('h1', articles[i].headline.main);
//   createElement('h2', articles[i].keywords[j].value);
//   createP(articles[i].keywords[j].name);
//   createP(articles[i].pub_date);
//   setInterval(loadJSON(url, gotData), 1000);
  //i=i+1;
  
 }

 function draw() {
    background(255);
    fill(50);
    rect(10,10,1655,150);
    stroke(255);
    strokeWeight(0.8);
    line(lineX, 0, lineX, height/10);
    strokeWeight(0.4);
    line(lineX-30, 0, lineX-30, height/10);
    lineX = lineX + 3;
    if (lineX > width) {
        lineX = 0;
    }
    stroke(255);
    strokeWeight(0.3);
    line(lineY, 0, lineY, height/10);
    strokeWeight(0.1);
    line(lineY-10, 0, lineY-10, height/10);
    lineY = lineY + 1;
    if (lineY > width) {
        lineY = 0;
    }
    stroke(255);
    fill(255);
    strokeWeight(0.5);
    line(lineZ+10, 0, lineZ+10, height/10);
    lineZ = lineZ + 5;
    if (lineZ > width) {
        lineZ = 0; 
    }
    text(titles[articlenum],50,50);
    textSize(50);
   // console.log(titles);

    // for (var j = 5665; j< 5674;j++){
    //     text(articles[j].headline.main,windowWidth/2,windowHeight/2);
 
    // }
    
   }
   function givetitle(){
       push();

    stroke(255,0,0);
    fill(255,0,0);

    text(titles[articlenum],20  ,20);
    pop();
    increment();
    limit();
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
  // 10.24: 5665-5674
  // 10.25: 5687-5703
  // 10.01-10.23: 0-5664