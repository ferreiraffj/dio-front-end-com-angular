function sayMyName(myName) {
  const result = `Meu nome é ${myName}`;
  console.log(result);
}

const myNameIs = "Felipe";
sayMyName(myNameIs); // Meu nome é Felipe

//

function verificaIdade(idade) {
  if (idade >= 18) {
    console.log(`${myNameIs} é maior de idade`);
  } else {
    console.log(`${myNameIs}é menor de idade`);
  }
}

verificaIdade(21); // Maior de idade

//

function escrevaMeuNome(nome) {
  return `Meu nome é ${nome}`;
}

function verificaIdade2(idade) {
  if (idade >= 18) {
    console.log(`${escrevaMeuNome("Felipe")} e eu sou maior de idade`);
  } else {
    console.log(`${escrevaMeuNome("Felipe")} e eu sou menor de idade`);
  }
}

verificaIdade2(21); // Meu nome é Felipe e eu sou maior de idade
