let cor;
let circulox; // horizontal
let circuloy; // vertical


function setup() {
  
createCanvas (400,400);// width x height
background(color(100,0,0));
 cor =color(random(0,255),random(0,255),random(0,255));
             circulo=[0,0,0];
circuloy=[random(height),random(height),random(height)];
          
}

//circulox=0,0,0
//circuloy=300,150,50

function draw(){

if(circulox[contador] += (
  
  fill(cor)
  
  //console.log(circulox,lenght);
 circle(circuloX[contador].circuloY[contador],50);
  //console.log(contador);
  circle(circulox[contador].circuloy[contador],50);
circulox[contador]+=random(0,3);
circuloy[contador]=0;

if(circulox[contador] >= width){
  circulox[contador]=random(height);
  circuloy[contador]=random(height);
  
}

}


if(mouseIsPressed){
  cor=color(random(90,255),random(0,255), random(0,255),random(0,100));
}

}
