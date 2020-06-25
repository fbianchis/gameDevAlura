class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, variacaoY, larguraSprite, alturaSprite){
    super(matriz, imagem, x, largura, altura,variacaoY, larguraSprite, alturaSprite);
    this.gravidade = 4; 
    this.velocidadeDoPulo = 0;
    this.yBase = height - altura - this.variacaoY;
    this.y = this.yBase;
    this.alturaPulo = -45;
    this.contadorPulos = 0;
  }
  pula(somPulo) {
    if(this.contadorPulos < 1) {
      somPulo.play();
      this.velocidadeDoPulo = this.alturaPulo;
      if(this.y < this.yBase) {
        this.contadorPulos += 1;
      }
    }
  }
  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if(this.y > this.yBase) {
      this.y = this.yBase;
      this.contadorPulos = 0;
    }
  }
  estaColidindo(Inimigo) {
    const precisao = 0.7;
    rect(this.x, 
        this.y, 
        this.largura * precisao, 
        this.altura);
    rect(Inimigo.x + 10, 
        Inimigo.y +5,  
        Inimigo.largura * 0.9,
        Inimigo.altura * precisao);
    noFill();
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura, 
      Inimigo.x + 10, 
      Inimigo.y +5,  
      Inimigo.largura * 0.9,
      Inimigo.altura * precisao   );
    return colisao;
  }
}