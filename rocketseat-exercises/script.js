// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F
 
 //Minha solução

//  let notaA  = ('A')
//  let notaB = ('B')
//  let notaC = ('C')
//  let notaD = ('D')
//  let notaF = ('F')


// function calculaNota(nota){
//   if (nota >= 90 && nota <= 100) {
//     alert('Sua nota é ' + notaA);
//   }
//   if (nota >= 80 && nota <= 89 ) {
//     alert('Sua nota é ' + notaB);
//   }
//   if (nota >= 70 && nota <= 79 ) {
//     alert('Sua nota é ' + notaC);
//   }
//   if (nota >= 60 && nota <= 69 ) {
//     alert('Sua nota é ' + notaD);
//   }
//   if (nota < 60 ) {
//     alert('Sua nota é ' + notaF);
//   }

// }

// calculaNota(45);



//Solução do professor



// function getScore (score){
// let scoreA = score >= 90 && score <= 100
// let scoreB = score >= 80 && score <= 89
// let scoreC = score >= 70 && score <= 79
// let scoreD = score >= 60 && score <= 69
// let scoreF = score < 60 && score >= 0

// let scoreFinal;

// if (scoreA) {
//   scoreFinal = "A"
// } else if (scoreB){
//   scoreFinal = "B"
// }else if (scoreC){
//   scoreFinal = "C"
// }else if (scoreD){
//   scoreFinal = "D"
// }else if (scoreF){
//   scoreFinal = "F"
// }else {
//   scoreFinal = "Nota inavlida"
// }

// return scoreFinal
// }

// console.log(getScore(100))


// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.


// let contasCasa = {
//   receitas: [2500, 3150, 300, 228.25],
//   despesas: [800, 250, 80, 540.35, 1200, 6000]
// }


// //a funcao tem o nome + a espera de valores que ela deve manipular;
// //Neste caso ela sempre vai esperar um array.
// //quando ela for invocada, deve sempre passar um array para ela.
// function somaValores(array){
//   //Para o calculo de soma de valores, pensa no que voce deve retornar;
//   //aqui voce precisa retornar uma soma;
//   //Para isso vamos criar a soma iniciando em 0;
//   let soma = 0;
//   //O for vai pegar o seu array e andar por cada item.
//   //Primeiro em 2500, 3150, 300 e assim por diante.
//   for (let index = 0; index < array.length; index++) {
//     //como criamos a soma iniciando a zero
//     //precisamos somar todos os valores retornados por ela;
//     //por isso devemos fazer soma = soma + valores do array;
//     // soma = 0;
//     // primeiro valor do array 2500;
//     // soma = 0 + 2500;
//     //alteramos o valor da soma agora o valor dela e 2500 e loop continua
//     //soma = 2500;
//     //segundo valor do array 3150
//     // soma = 2500 + 3150
//     // valor de soma = 5650
//     // e assim por diante ate terminar o array;
//     soma += array[index];
//   }

//   //assim que finalizado voce retorna o valor de soma.
//   return soma;

// }

// //dentro do parenteses = O que a funcao espera.
// function calculaBalance(contasCasa){
//  const somaReceitas = somaValores(contasCasa.receitas)
//  const somaDespesas = somaValores(contasCasa.despesas)

// const total = somaReceitas - somaDespesas

// let message = ""
//  if(total >=0){
// message = `Seu saldo foi positivo! R$ ${total.toFixed(2)}`
// } 
// if (total < 0){
// message = `Seu saldo foi negativo! R$ ${total.toFixed(2)}`
// }
// return message
// }


// //Chamar a funcao
// console.log(calculaBalance(contasCasa))




// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32


// function transformDegree (degree) {
//   const celsiusExists = degree.toUpperCase().includes('C')
//   const fahrenheitExists = degree.toUpperCase().includes('F')

//   if(!celsiusExists && !fahrenheitExists) {}
// }


/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

// const booksByCategory = [
//   {
//       category: "Riqueza",
//       books: [
//           {
//               title: "Os segredos da mente milionária",
//               author: "T. Harv Eker",
//           },
//           {
//               title: "O homem mais rico da Babilônia",
//               author: "George S. Clason",
//           },
//           {
//               title: "Pai rico, pai pobre",
//               author: "Robert T. Kiyosaki e Sharon L. Lechter",
//           },
//       ],
//   },
//   {
//       category: "Inteligência Emocional",
//       books: [
//           {
//               title: "Você é Insubstituível",
//               author: "Augusto Cury",
//           },
//           {
//               title: "Ansiedade : Como enfrentar o mal do século",
//               author: "Augusto Cury",
//           },
//           {
//               title: "Os 7 hábitos das pessoas altamente eficazes",
//               author: "Stephen R. Covey",
//           },
//       ],
//   },
// ];

// const totalCategories = booksByCategory.length
// console.log(totalCategories)


// for(let category of booksByCategory) {
//   console.log('Total de livros da categoria: ', category.category)
//   console.log(category.books.length)
// }



// function countAuthors () {
//   let authors = [];

//   for(let category of booksByCategory) {
//     for(let book of category.books){
//       if(authors.indexOf(book.author) == -1) {
//         authors.push(book.author)
//       }
//     }
//   }
//   console.log("Total de autores: ", authors.length)
// }
// countAuthors();


// function booksOfAuthor (author) {
//   let books = [];

//   for(let category of booksByCategory) {
//     for(let book of category.books){
//       if(book.author === author) {
//         books.push(book.title)
//       }
//     }
//   }
//   console.log(`Livros do autor ${author}: ${books.join(", ")}`)
// }

// booksOfAuthor ('Augusto Cury')

// function multiply(a, b){150
 
//   return a * b
// }
// console.log(multiply(5, 3))


function calculaEmprestimo(valorEmprestimo, quantidadeParcelas){
if(!valorEmprestimo && !quantidadeParcelas){
  return alert("Voce precisa preencher os campos!")
  
}
let acrescimoEmprestimo = ((parseInt(valorEmprestimo) * 20) / 100);
let valorTotal = parseInt(acrescimoEmprestimo) + parseInt(valorEmprestimo)
let valorPArcelas = parseInt(valorTotal) / parseInt(quantidadeParcelas)

alert(`O valor total do seu emprestimo e de R$ ${valorTotal} e o valor da sua parcela e de R$ ${valorPArcelas}`)
}

let valorEmprestimo = prompt("Qual o valor do emprestimo?");
let quantidadeParcelas = prompt("Quantas parcelas quer pagar?");

calculaEmprestimo(valorEmprestimo, quantidadeParcelas)