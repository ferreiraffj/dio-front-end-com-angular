// Criando classes
class Pessoa {
  nome;
  idade;
  dataNascimento;

  descrever() {
    console.log(`${this.nome} tem ${this.idade} anos`);
  }
}

const pessoa1 = new Pessoa();
pessoa1.nome = "Luiz";
pessoa1.idade = 30;
pessoa1.dataNascimento = "1991-01-01";
pessoa1.descrever();
console.log(pessoa1);

console.log("------------");

const pessoa2 = new Pessoa();
pessoa2.nome = "Maria";
pessoa2.idade = 25;
pessoa2.dataNascimento = "1996-01-01";
pessoa2.descrever();
console.log(pessoa2);

console.log("------------");

function comparaPessoas(p1, p2) {
  if (p1.dataNascimento < p2.dataNascimento) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p1.dataNascimentto > p2.dataNascimento) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}

comparaPessoas(pessoa1, pessoa2);
