// // Criação de objetos:
// const pessoa = {
//   nome: "Luiz",
//   sobrenome: "Miranda",
//   idade: 30,
//   endereco: {
//     rua: "Av Brasil",
//     numero: 320,
//   },
//   descrever: function () {
//     console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`);
//   },
// };

// // Acessando propriedades do objeto:
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// console.log(pessoa);

// // atribuindo valor a uma propriedade:
// pessoa.altura = 1.8;

// // Acessando propriedades do objeto:
// console.log(pessoa.altura);

// // Deletando propriedades do objeto:
// delete pessoa.endereco;

// // Acessando propriedades do objeto:
// console.log(pessoa);

// pessoa.descrever();

// pessoa.nome = "João";
// pessoa.descrever();

// Criação de objetos:
const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  descrever: function () {
    console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`);
  },
};

const atributo = "nome";
console.log(pessoa[atributo]);

pessoa["nome"] = "João"; // Acesso dinâmico
pessoa.nome = "João"; // Acesso direto
