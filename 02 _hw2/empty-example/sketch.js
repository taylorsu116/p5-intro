var input;
function setup() {
  noCanvas();
  var button = select('#submit');
  button.mousePressed(searching);
  input = select('#city');
  search ='Dog';
  var api = 'https://api.giphy.com/v1/gifs/search?api_key=ewf4zZN9CliGK0eGOLL5FESw09eg7q0p&q='+search+'&limit=25&offset=0&rating=G&lang=en'
  loadJSON(api,gotData)

  console.log(search);
}
function searching(){
  search = input.value();
  console.log(search);
  var api = 'https://api.giphy.com/v1/gifs/search?api_key=ewf4zZN9CliGK0eGOLL5FESw09eg7q0p&q='+search+'&limit=25&offset=0&rating=G&lang=en'
  loadJSON(api,gotData);
}

function draw() {
  
}
function gotData(giphy){

console.log(giphy.data[0].images.original.url)
  createImg(giphy.data[0].images.original.url);
  


}