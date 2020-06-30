class Inimigo extends Animacao {
  constructor(matriz, imagem, x, largura, altura, variacaoY, larguraSprite, alturaSprite, velocidade){
    super(matriz, imagem, x, largura, altura, variacaoY, larguraSprite, alturaSprite);
    this.velocidade = velocidade;
    this.x = width ;
  }
  move(){
    this.x -= this.velocidade;
  }
  aparece() {
    this.x = width;
  }
}