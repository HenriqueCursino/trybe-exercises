/* Exercício 5

let valor1 = 0;
let valor2 = 80;
let valor3 = 50;

let triagulo = valor1 + valor2 + valor3;

let anguloPositivo = valor1 > 0 && valor2 > 0 && valor3 > 0;

if (anguloPositivo) {
    if (triagulo === 180) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
else {
    console.log('Erro')
}
*/

//-------------------------------------------------------------------------------------------------------------------------

/* Exercício 6

let peça = 'oi'.toLowerCase();

switch (peça) {
    case 'rei':
        console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
        break;
    case 'rainha':
        console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças!')
        break;
    case 'bispo':
        console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças!');
        break;
    case 'cavalo':
        console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”!');
        break;
    case 'torre':
        console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças!')
        break;
    case 'peão':
        console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo!');
        break;
    default :
        console.log('Erro: Peça inválida');    
}
*/

//-------------------------------------------------------------------------------------------------------------------------

/* Exercício 7

let nota = 0;

if (nota >= 90 && nota <= 100) {
    console.log('A');
}
else if (nota >= 80 && nota < 90) {
    console.log('B');
}
else if (nota >= 70 && nota < 80) {
    console.log('C');
}
else if (nota >= 60 && nota < 70) {
    console.log('D');
}
else if (nota >= 50 && nota < 60) {
    console.log('E');
}
else if (nota < 50 && nota >= 0) {
    console.log('F');
}
else if (nota > 100 || nota < 0) 
    console.log('ERRO : Nota Inválida!')
*/

//-------------------------------------------------------------------------------------------------------------------------

/* Exercício 8
let a = 57;
let b = 20;
let c = 33;

let par = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  par = true;
}
console.log(par);
*/

//-------------------------------------------------------------------------------------------------------------------------

/* Exercício 9

let a = 10;
let b = 87;
let c = 10;

let impar = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  impar = true;
}
console.log(impar);
*/

//-------------------------------------------------------------------------------------------------------------------------

/* Exercício 10
let custo = 1;
let valorVenda = 3;

if (custo >= 0 && valorVenda >= 0) {
  let custoTotal = custo * 1.2;
  let lucro = (valorVenda - custoTotal) * 1000;
  console.log(lucro);
} else {
  console.log("Error, os valores não podem ser negativos");
}
*/
