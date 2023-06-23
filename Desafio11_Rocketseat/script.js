function aluno(nome, nota1, nota2) {
  this.nome = nome;
  this.nota1 = nota1;
  this.nota2 = nota2;
}

const Pamela = new aluno("Pamela", 7, 7);
const Julia = new aluno("Julia", 2, 8);
const Carla = new aluno("Carla", 9, 10);

let listaAlunos = [Pamela, Julia, Carla];

function media(aluno) {
  return `A média da aluna ${aluno.nome} foi: 
  ${((aluno.nota1 + aluno.nota2) / 2).toFixed(2)}.\n`
}

function avaliacao(aluno) {
  if (((aluno.nota1 + aluno.nota2) / 2) >= 7){
  return ` A aluna ${aluno.nome} foi aprovada.`
} else{
  return ` A aluna foi reprovada.`
}
}

for (let aluno of listaAlunos) {
  let msgmedia = media(aluno)
  let msgavaliacao = avaliacao(aluno)
  alert(msgmedia + msgavaliacao)
}
