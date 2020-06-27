class TelaInicial {
  constructor() {

  }
  draw(){
    this._imagemFundo();
    this._texto();
    this._botao();
  }
  _imagemFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text("As aventuras de", width/2 , height/5);
    textSize(125);
    text("HipstA", width/2 , 2*height/5);

  }
  _botao(){
    botaoGerenciador.y = (height/7)*5;
    botaoGerenciador.draw();
  }
}