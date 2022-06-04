let pessoas = [
    {nome: 'Carlos', idade: 31, aprovado: true, categoria: 'A'},
    {nome: 'João', idade: 11, aprovado: true, categoria: 'B'},
    {nome: 'Joaquim', idade: 21, aprovado: false, categoria: 'A'},
    {nome: 'Pedro', idade: 41, aprovado: true, categoria: 'A'},
]

function exibirAprovados(lista, categoria) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].aprovado && lista[i].idade >= 18 && lista[i].categoria == categoria) {
            let nomeDoAprovado = lista[i].nome
            console.log(nomeDoAprovado + " foi aprovado na categoria " + categoria )
        }
    }
}

exibirAprovados(pessoas, 'A')
exibirAprovados(pessoas, 'B')

