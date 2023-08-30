const promptSync = require('prompt-sync')();

// Função para calcular a média das notas fornecidas
function calcularMedia(notas) {
  const total = notas.reduce((acc, nota) => acc + nota, 0);
  return total / notas.length;
}

const nome_Aluno = promptSync('Digite o nome do seu aluno a ser calculada a média: ');

const notas_Aluno = [];
for (let i = 1; i <= 4; i++) {
  const notas = parseFloat(promptSync(`Digite a nota ${i} do aluno (A nota deve estar entre 0 e 10): `));
  if (notas < 0 || notas > 10) {
    console.log('Nota inválida. As notas devem estar entre 0 e 10.');
    process.exit(1);
  }
  notas_Aluno.push(notas);
}

const media_Aluno = calcularMedia(notas_Aluno);

const aluno = {
  nome: nome_Aluno,
  notas: notas_Aluno,
  media: media_Aluno,
};

console.log(aluno);
