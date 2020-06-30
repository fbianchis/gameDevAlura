class Jogo {
  constructor() {
    this.indiceAtual = 0;
    this.mapa = fita.mapa;
  }
  setup() {
    cenario = new Cenario (imagemCenario, 3);
    personagem = new Personagem (matrizPersonagem, imagemPersonagem, 0, 110, 135, 30, 220, 270);
    vida = new Vida (fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    const inimigo = new Inimigo (matrizInimigo, imagemInimigo, width - 52, 52, 52, 30, 104, 104, 10);
    const inimigoGrande = new Inimigo (matrizInimigoGrande, imagemInimigoGrande, width * 2, 200, 200, 0, 400, 400, 10);
    const inimigoVoador = new Inimigo (matrizInimigoVoador, imagemInimigoVoador, width -52, 100, 75, 200, 200, 150, 10);
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
    const linhaAtual = this.mapa[this.indiceAtual];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura; 
    inimigo.velocidade = linhaAtual.velocidade;
    cenario.exibe();
    cenario.move();
    personagem.exibe();
    personagem.aplicaGravidade();
    pontuacao.exibe();
    pontuacao.adicionaPonto();
    inimigo.exibe();
    inimigo.move();
    vida.draw();
    console.log(inimigo.x);
    if(inimigoVisivel) {
      this.indiceAtual ++;
      inimigo.aparece();
      if(this.indiceAtual > this.mapa.length - 1){
        this.indiceAtual = 0;
      }
      inimigo.velocidade = linhaAtual.velocidade;
      console.log(this.indiceAtual);
    }
    if (personagem.estaColidindo(inimigo)) {
      // pontuacao.pontos = 0;
      vida.perdeVida();
      personagem.ficaInvencivel();
      if(vida.vidas === 0) {
        image(imagemGameOver, width/2 - 200, height/2);
        noLoop();
      }
    }
  }
}