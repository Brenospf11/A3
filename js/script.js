function carregarVotos() {

    const votosSalvos = localStorage.getItem("votos");
    return votosSalvos ? JSON.parse(votosSalvos) : {
        candidato1: 0,
        candidato2: 0,
        candidato3: 0,
        candidato4: 0
    };
}

function salvarVotos(votos) {
    localStorage.setItem("votos", JSON.stringify(votos));
}

let votos = carregarVotos();

document.getElementById("startButton").addEventListener("click", function() {
    document.querySelector("header").classList.add("hidden");
    document.getElementById("cadastroSection").classList.remove("hidden");
});

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    console.log({ nome, email, idade });

    document.getElementById("cadastroSection").classList.add("hidden");
    document.getElementById("votacaoSection").classList.remove("hidden");
});

document.querySelectorAll(".votarButton").forEach(button => {
    button.addEventListener("click", function() {
        const candidato = this.getAttribute("data-candidato");
        votos[`candidato${candidato}`]++;

        salvarVotos(votos);

        document.getElementById("votacaoSection").classList.add("hidden");
        document.getElementById("confirmacaoSection").classList.remove("hidden");
    });
});

document.getElementById("resultButton").addEventListener("click", function() {
    document.getElementById("confirmacaoSection").classList.add("hidden");
    document.getElementById("resultadoSection").classList.remove("hidden");

    const ctx = document.getElementById('resultadosChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Candidato 1', 'Candidato 2', 'Candidato 3', 'Candidato 4'],
            datasets: [{
                label: 'Votos',
                data: [votos.candidato1, votos.candidato2, votos.candidato3, votos.candidato4],
                backgroundColor: ['red', 'blue', 'green', 'orange']
            }]
        }
    });
});

