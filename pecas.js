let peso = 300;

if (peso > 100) {
    console.log("A peça possui um peso adequado, pode ser cadastrada.")
} else {
    console.log("A peça não pode ser cadastrada, não possui o peso mínimo.")
}

let listaPecas = ["disco de freio", "amortecedor", "radiador", "virabrequim", "embreagem", "vela", "bateria", "correia", "radiador"];

if (listaPecas.length < 10) {
    console.log("A lista ainda possui espaço para mais peças.")
} else {
    console.log("Não há espaço disponível na lista, a capacidade máxima foi atingida.")
}

let nomePeca = "retrovisor";

if (nomePeca.length > 3) {
    console.log("Nome da peça é válido, pode seguir o cadastro.")
} else {
    console.log("Nome da peça inválido, o nome deve ter mais que 3 caracteres.")
}