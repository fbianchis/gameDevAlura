class Inimigo extends Animacao {
  constructor(matriz, imagem, x, largura, altura, variacaoY, larguraSprite, alturaSprite, velocidade, delay){
    super(matriz, imagem, x, largura, altura, variacaoY, larguraSprite, alturaSprite);
    this.velocidade = velocidade;
    this.delay = delay;
    this.x = width + this.delay;
  }
  move(){
    this.x -= this.velocidade;
    if (this.x  < -this.largura - this.delay) {
      this.x = width; 
    }
  }
}