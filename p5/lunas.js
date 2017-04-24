var planetas = [
"Mercurio",
"Venus",
"Tierra",
"Marte",
"Júpiter",
"Saturno",
"Urano",
"Neptuno",
"Plutón*",
]

var lunas = [0,0,1,2,67,62,27,14,5]

//planetas.push("Matrix");
//temp.push(4);

function setup() {
var canvas = createCanvas(windowWidth, windowHeight);
canvas.parent('here');
noLoop();
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for(var x = 0; x <= planetas.length; x++){
    //defino el blanco con 100/255 de transparencia
    fill(168,240,233);
    // el tamaño del texto es igual a la cantidad de oscars ganados * 3
    noStroke();
    ellipse (((width/(planetas.length+1))*(x+1)),125, 45, -(lunas[x]*3));
    // aquí dame el nro. de oscar ganado y ubícalo en una parte del ancho del canvas
    fill(150)
    text(lunas[x], ((width/(planetas.length+1))*(x+1)), (height/2));
    //re-defino el blanco
    // ahora cambia el tamaño de texto a 12 px, como valor fijo para todo lo que sigue
    textSize(18);
    // dame el nombre de la película correspondiente y ubícala en una parte del ancho
    text(planetas[x], ((width/(planetas.length+1))*(x+1)), ((height/2)+12),((windowWidth/(planetas.length+1))-50),100);
  }
}
