MeusCards = {
  cards: [
    {
      nome: "pedra",
      linkImage: "/PEDRA PAPEL TESOURA/Imagens/pedra.png",
    },
    {
      nome: "papel",
      linkImage: "/PEDRA PAPEL TESOURA/Imagens/papel.png",
    },
    {
      nome: "tesoura",
      linkImage: "/PEDRA PAPEL TESOURA/Imagens/tesoura.png",
    },
  ],
};
var dilma = document.getElementById("showtime");

var contadorP = 0;
var contaorC = 0;

function pedra() {
  var placarplayer = document.querySelector(".player");
  var placarCpu = document.querySelector(".CPU");
  var numeral = Math.floor(Math.random() * 3);
  var escolha = document.getElementById("duelo");
  var digjoy = document.getElementById("inimigo");
  //console.log(numeral);
  //for (var i = 0; MeusCards.cards.length > i; i++) {
  var cardB = MeusCards.cards[0];

  console.log(cardB);
  escolha.querySelector("img").setAttribute("src", cardB.linkImage);
  //}

  for (var i = 0; MeusCards.cards.length > i; i++) {
    var cardB = MeusCards.cards[numeral];

    digjoy.querySelector("img").setAttribute("src", cardB.linkImage);

    if (numeral == 0) {
      dilma.querySelector("h1").innerHTML = "EMPATE";
    } else if (numeral == 1) {
      dilma.querySelector("h1").innerHTML = "PERDEU";
      contaorC++;
      placarCpu.innerHTML = contaorC;
    } else {
      dilma.querySelector("h1").innerHTML = "GANHOU";
      contadorP++;
      placarplayer.innerHTML = contadorP;
    }
    console.log(contadorP);

    return 0;
  }
}

function papel() {
  var placarplayer = document.querySelector(".player");
  var placarCpu = document.querySelector(".CPU");
  var numeral = Math.floor(Math.random() * 3);
  var escolha = document.getElementById("duelo");
  var digjoy = document.getElementById("inimigo");

  //console.log(numeral);
  //for (var i = 0; MeusCards.cards.length > i; i++) {
  var cardB = MeusCards.cards[1];

  console.log(cardB);
  escolha.querySelector("img").setAttribute("src", cardB.linkImage);
  //}

  for (var i = 0; MeusCards.cards.length > i; i++) {
    var cardB = MeusCards.cards[numeral];

    digjoy.querySelector("img").setAttribute("src", cardB.linkImage);

    if (numeral == 0) {
      dilma.querySelector("h1").innerHTML = "GANHOU";
      contadorP++;
      placarplayer.innerHTML = contadorP;
    } else if (numeral == 1) {
      dilma.querySelector("h1").innerHTML = "EMPATE";
    } else {
      dilma.querySelector("h1").innerHTML = "PERDEU";
      contaorC++;
      placarCpu.innerHTML = contaorC;
    }

    return 0;
  }
}
function tesoura() {
  var placarplayer = document.querySelector(".player");
  var placarCpu = document.querySelector(".CPU");
  var numeral = Math.floor(Math.random() * 3);
  var escolha = document.getElementById("duelo");
  var digjoy = document.getElementById("inimigo");
  //console.log(numeral);
  //for (var i = 0; MeusCards.cards.length > i; i++) {
  var cardB = MeusCards.cards[2];

  console.log(cardB);
  escolha.querySelector("img").setAttribute("src", cardB.linkImage);
  //}

  for (var i = 0; MeusCards.cards.length > i; i++) {
    var cardB = MeusCards.cards[numeral];

    digjoy.querySelector("img").setAttribute("src", cardB.linkImage);

    if (numeral == 0) {
      dilma.querySelector("h1").innerHTML = "PERDEU";
      contaorC++;
      placarCpu.innerHTML = contaorC;
    } else if (numeral == 1) {
      dilma.querySelector("h1").innerHTML = "GANHOU";
      contadorP++;
      placarplayer.innerHTML = contadorP;
    } else {
      dilma.querySelector("h1").innerHTML = "EMPATE";
    }
    console.log(contadorP);
    return 0;
  }
}

btn1.addEventListener("click", pedra);
btn2.addEventListener("click", papel);
btn3.addEventListener("click", tesoura);
