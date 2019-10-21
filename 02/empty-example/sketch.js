// A wind diraction vector

var wind;
var position;
var place;
var input;
var velocity = 1;

var cloudcover;

function setup(){
    createCanvas(720,720);
    //Get data from weatherstack.com
    // var url = 'http://api.weatherstack.com/current?access_key=68c02b239398fdc50ae5b945187128cb&query=London';
    // loadJSON(url, gotWeather);
    var button = select('#submit');
    button.mousePressed(askWeather);
    input = select('#city');
    
    
    position = createVector(width/2, height/2);
    wind = createVector();
    }

function askWeather(){
    //Get data from weatherstack.com
//var url = "http://api.weatherstack.com/current?access_key=b30e6c71d82be5920a041820b9093320&query=New%20York";

var api = 'http://api.weatherstack.com/current?access_key=68c02b239398fdc50ae5b945187128cb&query=';
//var city = 'London';
var url = api + input.value();

loadJSON(url,gotWeather);
}


function gotWeather(weather){
    var angle = radians(Number(weather.current.wind_degree));
    var windmag = Number(weather.current.wind_speed);

    cloudcover = Number(weather.current.cloudcover);


    wind = p5.Vector.fromAngle(angle);

}



function draw(){
background(0,position.y/3,position.x/3);
 

// Arrow pointing out the wind direction
push();
translate(32,height-32);
//insert variable
rotate(wind.heading()+PI/2);
noStroke();
fill(255);
ellipse(0,0,48,48);

stroke(45,123,182);
strokeWeight(3);
line(0,-16,0,16);

noStroke();
fill(45,123,182);
triangle(0,-18,-6,-10,6,-10);

pop();

cloudcover = cloudcover + velocity;
if ((cloudcover > height/2) || (cloudcover < 0)) {
velocity = velocity * -1;
}
fill(255,150,200);
ellipse(width/2,height/2,cloudcover, cloudcover);
// Create a shape following the wind
position.add(wind);

noStroke();
fill(255);
ellipse(position.x, position.y, 20,20);


if(position.x > width) position.x = 0;
if(position.x < 0) position.x = width;
if(position.y > height) position.y = 0;
if(position.y < 0) position.y = height;


}



