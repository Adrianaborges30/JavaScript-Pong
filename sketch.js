function setup() {
  createCanvas(600, 400);
}

let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;

  if (xBolinha + raio > 600 || xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  }
  
  if (yBolinha + raio > 400 || yBolinha - raio < 0){velocidadeyBolinha *= -1;}
 
}
