//MAPA DE BLOCOS

class ElementoMapa{

    constructor(posx,posy,cor,tam){
        this.x =posx;
        this.y = posy;
        this.cor = cor;
        this.tam = tam;


        this.draw = function(){
            fill(this.cor);
            square(this.x,this.y,this.tam);
        }

    }
}

class BlocoAzul extends ElementoMapa{

    constructor(posx,posy){
        super(posx,posy,'blue',50);
    }
}

class BlocoVermelho extends ElementoMapa{

    constructor(posx,posy){
        super(posx,posy,'red',50);
    }
}


class BlocoAmarelo extends ElementoMapa{

    constructor(posx,posy){
        super(posx,posy,'yellow',50);
    }
}

class BlocoPreto extends ElementoMapa{

    constructor(posx,posy){
        super(posx,posy,'black',50);
    }
}

var maps = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,1],
    [1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,0,1,0,0,1,1,1,2,1,1,1,0,0,0,0,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var Elementos = [];


function setup(){
    const blocos = [BlocoPreto, BlocoAzul, BlocoAmarelo, BlocoVermelho];
    
    createCanvas(800, 800);

    for (let i = 0; i < maps.length; i++) {
        for(let j=0;j< maps[i].length;j++) {
            Elementos.push(new blocos[maps[i][j]](j*50,i*50));
        }
    }
}

function draw(){
    
    for (let i = 0; i < Elementos.length; i++) {
            Elementos[i].draw();
    }

}