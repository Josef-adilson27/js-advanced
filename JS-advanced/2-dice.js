

// Сделать функцию для настольных игр. Которая принимает тип dice, который надо бросить:
// d4, d6, d8, d10, d12, d16, d20 и возвращает случайное целое число на этом интервале с включёнными границами:
// d6 - возможные значения - 1, 2, 3, 4, 5, 6


const acceptDices = ["d4", "d6", "d8", "d10", "d12", "d16", "d20"];

//получаем рандомную кость
function getRandomDice() {
  randomDiceNumber = Math.ceil(
    Math.random() * acceptDices[acceptDices.length - 1].slice(1)
  );
  return "d" + randomDiceNumber;
}

//получаем значения
function returnNumber(param) {
  if (acceptDices.includes(param)) {
    const rnd = Number(param.slice(1));
    return Math.ceil(Math.random() * rnd);
  } else {
    return `уппс... увы кость ${param} неправильная.
      Вам доступны следующие значения: ${[...acceptDices]}
    `;
  }
}

console.log(returnNumber(getRandomDice()));
