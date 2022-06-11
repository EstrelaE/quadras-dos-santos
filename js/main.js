const sayings = [
  {
    popular: [
      "A São João vou cantar ",
      "Pois é dele este dia",
      "E a todes vou desejar",
      "Paz, Amor e Alegria",
    ],
    dixa: [
      "À Alexandra vou cantar",
      "Pois é dela este dia",
      "E a todes vou desejar",
      "Paz, Amor e Alegria",
    ],
  },
  {
    popular: [
      "A treze temos Santo António",
      " A vinte e quatro São João",
      "A vinte e nove São Pedro",
      "Tudo com animação",
    ],
    dixa: [
      "A vinte e nove temos São Pedro",
      "A vinte e quatro São João",
      "A treze Santo António",
      "E a doze a mãe Espiridião",
    ],
  },
  {
    popular: [
      "Os homens são o diabo",
      "Não há mulher que o negue",
      "Mas todas elas procuram",
      "Um diabo que as carregue",
    ],
    dixa: [
      "Os filhos são o diabo",
      "Não há mãe que o negue",
      "Mas a mãe Alexandra quer",
      "Que um dia alguém a carregue",
    ],
  },
  {
    popular: [
      "Eu gosto de trabalhar",
      "Porque trabalhar faz bem",
      "Mas gosto mais do descanso",
      "Que não faz mal a ninguém",
    ],
    dixa: [
      "A Alexandra não gosta de trabalhar",
      "Porque a canseira torna-se chata",
      "Mas gosta de ver netflix",
      "E comer chocolate nas bolachas mulata",
    ],
  },
  {
    popular: [
      "Ó meu rico Santo António",
      "Ó meu rico padroeiro",
      "Faz lá o milagre",
      "E arranja-me algum dinheiro",
    ],
    dixa: [
      "A minha rica Santa Dixa",
      "A minha rica mãezinha",
      "Fez-me lá um milagre",
      "E saí bem bonitinha",
    ],
  },
  {
    popular: [
      "Santo António de Lisboa | Era um grande pregador | Mas é por ser Santo António |Que as moças lhe têm amor",
    ],
    dixa: [
      "Santa Alexandra do Mação",
      "É boa professora ouvem o que disser",
      "Mas é por ter os olhos verdes",
      "Que lhe dizem 'ambos quer?'",
    ],
  },
  {
    popular: [
      "Manjerico, manjerico",
      "Manjerico que te dei",
      "A tristeza com que fico",
      "Ainda amanhã a terei",
    ],
    dixa: [
      "Manjerico, manjerico",
      "Manjerico que te dei",
      "A tristeza da Alexandra",
      "Com um bom mimo tratarei",
    ],
  },
  {
    popular: [
      "O dia de Santo António",
      "É dia de comemoração",
      "E a quem mais amamos",
      "Nós damos o coração",
    ],
    dixa: [
      "O dia de senhora minha mãe",
      "É dia de comemoração",
      "Ela diz que faz o bolo",
      "Origada Alexandra Espiridião!",
    ],
  },
  {
    popular: [
      "No mês dos santos populares",
      "Vou para a rua, vou cantar",
      "Não quero estar em casa",
      "Quero é ir pular",
    ],
    dixa: [
      "É mês dos santos populares",
      "E é mês Espiridião",
      "Ninguém fica em casa",
      "Eu cá vou para o Mação",
    ],
  },
  {
    popular: [
      "Em Junho todes bailam",
      "Assim é tradição",
      "As ruas estão enfeitadas",
      "Lá de cima até ao chão",
    ],
    dixa: [
      "A Dixa gosta de festa",
      "Como manda a tradição",
      "Quando se começa a enfeitar",
      "É de cima até ao chão",
    ],
  },
];

const quadra = document.querySelector("#quadra");

document.querySelector(".popular").addEventListener("click", generatePopular);
document.querySelector(".dixa").addEventListener("click", generateDixa);

function generatePopular() {
  if (quadra.childNodes.length !== 0) {
    quadra.innerHTML = "";
  }
  let random = Math.floor(Math.random() * 10);
  sayings[random].popular.forEach(
    (e) => (document.querySelector("#quadra").innerHTML += `<p>${e}</p>`)
  );
}

function generateDixa() {
  if (quadra.childNodes.length !== 0) {
    quadra.innerHTML = "";
  }
  let random = Math.floor(Math.random() * 10);
  sayings[random].dixa.forEach(
    (e) => (document.querySelector("#quadra").innerHTML += `<p>${e}</p>`)
  );
}
