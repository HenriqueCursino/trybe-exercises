// Agora n é o valor da base!
// A altura da pirâmide está relacionado com o centro dela!
let n = 5;
let symbol = '*';
let inputLine = '';

// Para encontrar o centro da pirâmide é só somar 1 ao valor e dividir por 2!
let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
// Para verificar se está no centro!
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  // Partindo do meio da pirâmide!
  controlRight += 1;
  controlLeft -= 1
}
