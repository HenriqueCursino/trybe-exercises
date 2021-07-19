/*
const morning = () => 'Acordando!!';

const late = () => 'Bora tomar café!!';

const night = () => 'Partiu dormir!!';

// Ao chamar a função doingThings:
const doingThings = (callback) => {
  const result = callback();
  console.log(result);
}

doingThings(morning);
doingThings(late);
doingThings(night);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
*/

/*
const newEmployees = (person) => {
  const employees = {
    id1: person('Pedro Guerra'),
    id2: person('Luiza Drumond'),
    id3: person('Carla Paiva'),
  }
  return employees;
};

const person = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return { name, email: `${email}@trybe.com` };
}

console.log(newEmployees(person));
*/

/*
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  if(myNumber === number) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
};

console.log(lotteryResult(2, numberChecker));
*/

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));

