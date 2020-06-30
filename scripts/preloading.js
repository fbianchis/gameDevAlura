function preload(){
  fita = loadJSON( "../fita/fita.json");
  imagemCenario = loadImage('../assets/imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('../assets/imagens/personagem/correndo.png');
  imagemGameOver = loadImage('../assets/imagens/assets/game-over.png');
  imagemCoracao = loadImage('../assets/imagens/assets/coracao.png');
  imagemInimigo = loadImage('../assets/imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('../assets/imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('../assets/imagens/inimigos/gotinha-voadora.png');
  imagemTelaInicial = loadImage('../assets/imagens/assets/telaInicial.png');
  fonteTelaInicial = loadFont('../assets/imagens/assets/fonteTelaInicial.otf');
  trilhaSonora = loadSound('../assets/sons/trilha_jogo.mp3');
  somPulo = loadSound('../assets/sons/somPulo.mp3');
}