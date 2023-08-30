import promptSync from 'prompt-sync';

// Interface para definir os dados que serão usados no objeto aluno
interface Aluno {
  nome: string;
  notas: number[];
  media: number;
}

const prompt = promptSync();

// Solicitar nome do aluno ao usuario
const nome_Aluno = prompt('Digite o nome do seu aluno a ser calculada a média: ');

// Solicitar as 4 notas ao usuario
const notas_Aluno: number[] = [];
for (let i = 1; i <= 4; i++) {
  const notas = parseFloat(prompt(`Digite a nota ${i} do aluno (A nota deve estar entre 0 e 10): `));
  if (notas < 0 || notas > 10) {
    console.log('Nota inválida. As notas devem estar entre 0 e 10.');
    process.exit(1);
  }
  notas_Aluno.push(notas);
}

// Função para calcular a média das notas fornecidas
function calcularMedia(notas: number[]): number {
  const total = notas.reduce((acc, nota) => acc + nota, 0);
  return total / notas.length;
}

// Atribuir a cariavel a média das notas fornecidas
const media_Aluno = calcularMedia(notas_Aluno);

// Criar objeto com os dados digitados e calculados do aluno
const aluno: Aluno = {
  nome: nome_Aluno,
  notas: notas_Aluno,
  media: media_Aluno,
};

// Exibir o objeto aluno no console
console.log(aluno);