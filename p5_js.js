const TAMANHO_TILE = 1280/25;
const VEL = 1;
var socket = io()
let img;
function preload() {
    img = loadImage('./tiles/tiles.png');
}

class ElementoMapa{

    constructor(posx,posy,cor,tam){
        this.x =posx;
        this.y = posy;
        this.cor = cor;
        this.tam = tam;


        this.draw = function(){
            fill(this.cor);
            
            square( this.x * this.tam , this.y * this.tam, this.tam );
        }

    }
}


class SpriteBlock{
    constructor(posx,posy,matrixX,matrixY){
        this.x =posx;
        this.y = posy;
        this.matrixX = matrixX;
        this.matrixY = matrixY;

        this.draw = function(){
            //fill(this.cor);
            image(img, 
                this.x * TAMANHO_TILE ,
                 this.y * TAMANHO_TILE,
                 TAMANHO_TILE,
                 TAMANHO_TILE,
                 16*this.matrixX,
                 16*this.matrixY,
                 16,
                 16
                 );
            //square( this.x * this.tam , this.y * this.tam, this.tam );
        }

    }
}

class Wall extends SpriteBlock{
    constructor(x,y){
        super(x,y,1,1);
    }
}

class BlocoAzul extends ElementoMapa{

    constructor(posx,posy){
        super(posx,posy,'blue',TAMANHO_TILE);
    }
}

class BlocoVermelho extends ElementoMapa{

    constructor(posx,posy){
        super(posx,posy,'red',TAMANHO_TILE);
    }
}


class BlocoAmarelo extends ElementoMapa{

    constructor(posx,posy){
        super(posx,posy,'yellow',TAMANHO_TILE);
    }
}

class BlocoPreto extends ElementoMapa{

    constructor(posx,posy){
        super(posx,posy,'black',TAMANHO_TILE);
    }
}


class Player extends BlocoVermelho{

    constructor(id,posx,posy){
        super(posx,posy);
        this.id = id;
    }

    move(tecla){
        if ( tecla==UP_ARROW    && this.canMove(this.x, this.y-VEL) ) this.y-= VEL;
        if ( tecla==DOWN_ARROW  && this.canMove(this.x, this.y+VEL) ) this.y+= VEL;
        if ( tecla==LEFT_ARROW  && this.canMove(this.x-VEL, this.y) ) this.x-= VEL;
        if ( tecla==RIGHT_ARROW && this.canMove(this.x+VEL, this.y) ) this.x+= VEL;
    }

    update(){
    
    }

    canMove(newX, newY){
        return !maps[ Math.floor(newY) ][ Math.floor(newX)] || maps[ Math.floor(newY)][ Math.floor(newX)] == 2;
    }
}

class Inimigo extends BlocoAmarelo{

  constructor(posx,posy){
      super(posx,posy);
  }

  move(){
    let mover = parseInt(random(1, 5)) ;
      //console.log(mover);

      setTimeout(()=>{
        if ( mover == 1    && this.canMove(this.x, this.y-1) ) this.y--;
        if ( mover == 2  && this.canMove(this.x, this.y+1) ) this.y++;
        if ( mover == 3  && this.canMove(this.x-1, this.y) ) this.x--;
        if ( mover == 4 && this.canMove(this.x+1, this.y) ) this.x++;
      },random(0, 1000));
      
  }

  

  canMove(newX, newY){
      return !maps[newY][newX] || maps[newY][newX] == 2;
  }
}


var maps = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var elementos = [];

var players = [] ;
var jogador;
//var inimigo = new Inimigo(10,7)






function setup(){
    const blocos = [BlocoPreto, Wall, BlocoAmarelo, BlocoVermelho];
    jogador = new Player(parseInt(random(10)),1,7);
    createCanvas(1280, 685);
    frameRate(30);
        for (let i = 0; i < maps.length; i++) {
        for(let j=0;j< maps[i].length;j++) {
            elementos.push(new blocos[maps[i][j]](j,i));
        }
    }
}

function draw(){
    background(0,0,0);
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].draw();
    }
    
    jogador.draw();
   // inimigo.draw();
   // inimigo.move();
   // console.log("Total players",players.length);
    if(players.length){
        for(let i=0;i<players.length;i++){
            //console.log(players[i],players[i].x);
            fill(players[i].cor);
            square( players[i].x * players[i].tam , players[i].y * players[i].tam, players[i].tam );
        }
    }
    
    if(keyIsDown(keyCode)) { 
        jogador.move(keyCode);
    } 
    
}



