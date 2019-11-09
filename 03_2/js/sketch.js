var dancingWords = [];
var texts;

class DanceSpan{
  constructor(element, x,y){
    element.position(x,y);
    this.element = element;
    this.x = x;
    this.y = y;
  }

  brownian(){
    this.x += RandomSource(-6, 6);
    this.y += RandomSource(-6, 6);
    this.element.postion(this.x, this.y);
  }
}

function setup() {
  //load data
var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=rain&api-key=7tGOPRANNVIG9ETUezuZGGGi7TT7LmEd';
loadJSON(url, gitText);

 //Creat new dom element
 createImageBitmap('Hello Worlds').addClass('text');
 
 texts = selectAll('.text)');

 //getting letters from paragraph
 for(var i=0; i<words.length; i++){
   const paragraph = texts[i].html();
   const words = paragraph.split('  ');
   //update the dancingWorld Array with elements
   for(var j=0; j<words.length; j++){
     const spannedWorld = createSpan(words[j]);
     const dw = new DanceSpan( spannedWorld, random(600), random(200));
     dancingWords.push(dw);
   }
   }
}

function draw() {
  //display the letters
  for(var i=0; i<dancingWorld.length; i++){
    
  }

  function gotText(nytimes){
    text = nytimes.responds.doc[0].headline.main;
    dancingWords[i].brownian();
    for(var j=0; j<words.length; j++){
      const spannedWorld = createSpan(words[j]);
      const dw = new DanceSpan( spannedWorld, random(600), random(200));
      dancingWords.push(dw);
    
  }
}
}