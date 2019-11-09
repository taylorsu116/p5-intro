var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=ewf4zZN9CliGK0eGOLL5FESw09eg7q0p";
var query ="&q=ryan+gosln";

function setup() {
  noCanvas();
  var url = api+apiKey+query;
  loadJSON(url, gotData);
}

function gotData(giphy) {
  //create 
  for (var i=0; i<25; i++){
  createImg(giphy.data[i].images.fixed_width.url);
  }
}