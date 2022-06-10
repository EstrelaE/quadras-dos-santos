const sayings = [
  {
    popular:
      "A São Jão vou cantar | Pois é dele este dia | E a todos vou desejar | Paz, Amor e Alegria",
    mom: "À Alexandra vou cantar | Pois é dela este dia | E a tods vou desejar | Paz, Amor e Alegria",
  },
  {
    popular:
      "A treze temos Santo António | A vinte e quatro São João | A vinte e nove São Pedro | Tudo com animação",
    mom: "A vinte e quatro temos São João | A vinte e nove São Pedro | A treze Santo António | E a doze a mãe que tem sempre razão",
  },
];

document.querySelector("button").addEventListener("click", generateText);

function generateText() {
  document.querySelector("p").innerText = sayings[0].mom;
}
