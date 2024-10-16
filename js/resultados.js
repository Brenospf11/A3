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

let votos = carregarVotos();

const ctx = document.getElementById("resultadosChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Candidato 1", "Candidato 2", "Candidato 3", "Candidato 4"],
    datasets: [
      {
        label: "Votos",
        data: [
          votos.candidato1,
          votos.candidato2,
          votos.candidato3,
          votos.candidato4,
        ],
        backgroundColor: ["red", "blue", "green", "orange"],
      },
    ],
  },
});
