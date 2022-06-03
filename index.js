let pessoas = [
    {nome: 'Carlos', idade: 31, aprovado: true, categoria: 'A'},
    {nome: 'João', idade: 18, aprovado: true, categoria: 'B'},
    {nome: 'Joaquim', idade: 21, aprovado: false, categoria: 'A'},
    {nome: 'Pedro', idade: 41, aprovado: true, categoria: 'A'},
]

let lista = ""

function exibirAprovados(lista, categoria) {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].aprovado == true && pessoas[i].idade >= 18 && pessoas[i].categoria == categoria) {
            lista = pessoas[i].nome
            console.log(lista + " foi aprovado na categoria " + categoria )
        }
    }
}

exibirAprovados(lista, 'A')
exibirAprovados(lista, 'B')

