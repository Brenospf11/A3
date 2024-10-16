function carregarVotos() {
  const votosSalvos = localStorage.getItem("votos");
  return votosSalvos
    ? JSON.parse(votosSalvos)
    : {
        candidato1: 0,
        candidato2: 0,
        candidato3: 0,
        candidato4: 0,
      };
}

function salvarVotos(votos) {
  localStorage.setItem("votos", JSON.stringify(votos));
}

let votos = carregarVotos();

document.querySelectorAll(".votarButton").forEach((button) => {
  button.addEventListener("click", function () {
    const candidato = this.getAttribute("data-candidato");
    votos[`candidato${candidato}`]++;

    salvarVotos(votos);

    window.location.href = "../pages/confirmacao.html";
  });
});
