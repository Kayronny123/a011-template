// criando objeto

const estudante = {
    nome: 'Kayronny',
    sobrenome: 'Sales',
    matricula: 9983,
    notasSemestre: [7, 8, 10],
}
console.log("objeto estudante", estudante);

// adicionando nova propriedade ao objeto estudante

estudante.modulo = "CSS"
console.log('objeto estudante com modulo', estudante);

// imprimento informações de objeto estudante

console.log('Nome do estudante', estudante.nome);
console.log('segunda nota semestre', estudante.notasSemestre[1]);
console.log('modulo atual', estudante.modulo);

// manipulando objetos

const copiaEstudante = {...
    estudante
}
console.log('copia estudante', copiaEstudante);

// alterando valor da propriedade nome

copiaEstudante.nome = 'Astrodev'
console.log("copia com nome alterado", copiaEstudante);

// adicionando nota as notas do semestre 
copiaEstudante.notasSemestre = [...
copiaEstudante.notasSemestre, 9]
console.log('adicionando nova nota', copiaEstudante);

// alterando valor da propriedade modulo

copiaEstudante.modulo = "React JS"
console.log('adicionando novo modulo', copiaEstudante);

// criando array e adicionando objetos estudante e copiaEstudantes

const estudantesLabenu = [];
estudantesLabenu.push(estudante);
estudantesLabenu.push(copiaEstudante);
console.log("Array estudantes labenu", estudantesLabenu);

// exercicio de fixação
// parte 1
// criando objeto chamado carrinho
const carrinho = {
    comprador: "Pedro",
    pagamento: "avista",
    endereco: "avenida piedade",
}
console.log(carrinho);
// parte 2
// criando uma array  de objetos chamado compras incluindo nome dos produtos
// preço e quantidade comprada

const compras = 
[
    {
       produto: "pão", 

       valor: 5, 

       quantidade: 5,
},
{
    produto: "ovo", 

    valor: 3, 

    quantidade: 10,
}
]
 
// adicionando objeto de compras em carrinho e imprimindo quantidade comprada de itens e quantos itens
carrinho.compras = compras
console.log(carrinho); 
console.log("quantidade de itens: ", carrinho.compras[0].quantidade + carrinho.compras[1.].quantidade);
console.log("quantidade de produtos", compras.length);


// parte 3
// espelhando carrinho mudando nome para carrinhoPresente
// alterando nome do comprador e forma de pagamento 
// imprimindo em tela nomes alterados
const carrinhoPresente = {...
    carrinho}
carrinhoPresente.comprador = "Katia";
carrinhoPresente.pagamento = "cartão presente"
console.log('alterando presenteado e forma de pagamento', carrinhoPresente);


























































