let imagemCenario;
let imagemGameOver;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let cenario; 
let trilhaSonora;
let personagem;
let somPulo;
let pontuacao;

const inimigos = [];

const matrizInimigo = [
  [0, 0  ], [104, 0  ], [208, 0  ], [312, 0  ],
  [0, 104], [104, 104], [208, 104], [312, 104],
  [0, 208], [104, 208], [208, 208], [312, 208],
  [0, 312], [104, 312], [208, 312], [312, 312],
  [0, 416], [104, 416], [208, 416], [312, 416],
  [0, 520], [104, 520], [208, 520], [312, 520],
  [0, 624], [104, 624], [208, 624], [312, 624] 
];

const matrizPersonagem = [
  [0, 0  ], [220, 0  ], [440, 0  ], [660, 0  ],
  [0, 270], [220, 270], [440, 270], [660, 270],
  [0, 540], [220, 540], [440, 540], [660, 540], 
  [0, 810], [220, 810], [440, 810], [660, 810] 
];

const matrizInimigoGrande = [
  [0   , 0   ], [400 , 0   ], [800 , 0   ], [1200, 0   ],
  [1600, 0   ], [0   , 400 ], [400 , 400 ], [800 , 400 ],
  [1200, 400 ], [1600, 400 ], [0   , 800 ], [400 , 800 ],
  [800 , 800 ], [1200, 800 ], [1600, 800 ], [0   , 1200],
  [400 , 1200], [800 , 1200], [1200, 1200], [1600, 1200], 
  [0   , 1600], [400 , 1600], [800 , 1600], [1200, 1600],
  [1600, 1600], [0   , 2000], [400 , 2000], [800 , 2000]
];
const matrizInimigoVoador = [
  [0  , 0  ], [200, 0  ], [400, 0  ], [0  , 150],
  [200, 150], [400, 150], [0  , 300], [200, 300],
  [400, 300], [0  , 450], [200, 450], [400, 450],
  [0  , 600], [200, 600], [400, 600], [0  , 750],
];


function preload(){
  imagemCenario = loadImage('./assets/imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png');
  imagemGameOver = loadImage('./assets/imagens/assets/game-over.png');
  imagemInimigo = loadImage('./assets/imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('./assets/imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('./assets/imagens/inimigos/gotinha-voadora.png');
  trilhaSonora = loadSound('./assets/sons/trilha_jogo.mp3');
  somPulo = loadSound('./assets/sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario (imagemCenario, 3);
  personagem = new Personagem (matrizPersonagem, imagemPersonagem, 0, 110, 135, 30, 220, 270);
  const inimigo = new Inimigo (matrizInimigo, imagemInimigo, width - 52, 52, 52, 30, 104, 104, 10, 100);
  const inimigoGrande = new Inimigo (matrizInimigoGrande, imagemInimigoGrande, width * 2, 200, 200, 0, 400, 400, 10, 500);
  const inimigoVoador = new Inimigo (matrizInimigoVoador, imagemInimigoVoador, width -52, 100, 75, 200, 200, 150, 10, 100);
  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);
  pontuacao = new Pontuacao();
  frameRate(40);
  trilhaSonora.loop();
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula(somPulo);
  }
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  personagem.aplicaGravidade();
  pontuacao.exibe();
  pontuacao.adicionaPonto();
  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();
    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width/2 - 200, height/2);
    }
  })
}
