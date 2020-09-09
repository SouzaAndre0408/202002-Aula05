let contagem: Array<number>;
contagem = [0, 0, 0, 0, 0, 0];
let controle: number = 0;

$(document).ready(function () {
    $("#contar").click(() => {

        visualizar();
        controle = 0;

        let a: string = (<HTMLSelectElement>document.getElementById('voto')).value;
        alert("Voto computado!!");
        let b = parseInt(a);

        if (b == 1) {
            contagem[0] += 1;
        } else if (b == 2) {
            contagem[1] += 1;
        } else if (b == 3) {
            contagem[2] += 1;
        } else if (b == 4) {
            contagem[3] += 1;
        } else if (b == 5) {
            contagem[4] += 1;
        } else {
            alert("O voto é diferente de 1 a 5!Será considerado nulo!")
            contagem[5] += 1;
        }
        limpaCampo();
    })
})

$(document).ready(function () {
    $("#apurar").click(() => {
        controle = 1;
        visualizar();
        let esconde = document.getElementById("escondeResultado").innerHTML = "Votos do candidato 1: " + contagem[0] + " <br>Votos do candidato 2: " + contagem[1] + "<br>Votos do candidato 3: " + contagem[2] + "<br> Votos do" +
            "candidato 4: " + contagem[3] + "<br>Votos do candidato 5:" + contagem[4] + "<br>Votos nulo:" + contagem[5] + "<br> Candidato mais votado: " + maiorNumero();

    })
})

function maiorNumero() {
    var maior = 0;
    var pos = 0;

    for (let i = 0; i < 6; i++) {
        if (maior < contagem[i]) {
            maior = contagem[i];
            pos = i + 1;
        }
    }
    return pos;
}

function visualizar() {
    if (controle == 0) {
        let esconde = (<HTMLSelectElement>document.getElementById('escondeResultado')).hidden = true;
    } else {
        let esconde = (<HTMLSelectElement>document.getElementById('escondeResultado')).hidden = false;
        controle = 0;
    }
}

function limpaCampo() {
    $("#voto").val("");
}