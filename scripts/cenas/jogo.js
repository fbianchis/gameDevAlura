class Jogo {
  constructor() {
    this.inimigoAtual = parseInt(random(0,3));
  }
  setup() {
    cenario = new Cenario (imagemCenario, 3);
    personagem = new Personagem (matrizPersonagem, imagemPersonagem, 0, 110, 135, 30, 220, 270);
    const inimigo = new Inimigo (matrizInimigo, imagemInimigo, width - 52, 52, 52, 30, 104, 104, 10, 20);
    const inimigoGrande = new Inimigo (matrizInimigoGrande, imagemInimigoGrande, width * 2, 200, 200, 0, 400, 400, 10, 20);
    const inimigoVoador = new Inimigo (matrizInimigoVoador, imagemInimigoVoador, width -52, 100, 75, 200, 200, 150, 10, 20);
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    pontuacao = new Pontuacao();
    trilhaSonora.loop();
  }
  keyPressed(key){
    if (key === 'ArrowUp') {
      personagem.pula(somPulo);
    }
  }
  draw(){
    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura; 
    cenario.exibe();
    cenario.move();
    personagem.exibe();
    personagem.aplicaGravidade();
    pontuacao.exibe();
    pontuacao.adicionaPonto();
    inimigo.exibe();
    inimigo.move();
    if(inimigoVisivel) {
      this.inimigoAtual = parseInt(random(0,3));
      inimigo.velocidade = parseInt(random(10, 20));
      console.log(this.inimigoAtual);
    }
    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width/2 - 200, height/2);
      pontuacao.pontos = 0;
    }
  }
}