const alunos = ["João", "Juliana", "Caio", "Ana"];
console.log(alunos[0]);

alunos.push("Miguel"); // Adiciona um elemento no final do array
console.log(alunos);

alunos.unshift("Marcelo"); // Adiciona um elemento no início do array
console.log(alunos);

alunos.pop(); // Remove o último elemento do array
console.log(alunos);

alunos.shift(); // Remove o primeiro elemento do array
console.log(alunos);

console.log(alunos.slice(0, 3)); // Retorna um novo array com os elementos do array original de acordo com o intervalo passado como parâmetro

console.log(alunos instanceof Array); // Verifica se a variável é um array

console.log(alunos.includes("João")); // Verifica se o array possui o elemento passado como parâmetro

console.log(alunos.indexOf("Caio")); // Retorna o índice do elemento passado como parâmetro
