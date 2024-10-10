// Сделать функцию для настольных игр. Которая принимает тип dice, который надо бросить:
// d4, d6, d8, d10, d12, d16, d20 и возвращает случайное целое число на этом интервале с включёнными границами:
// d6 - возможные значения - 1, 2, 3, 4, 5, 6

const acceptDices = {
  d4: 4,
  d6: 6,
  d8: 8,
  d10: 10,
  d12: 12,
  d20: 20,
};

function getRandomDice() {
  const diceKeys = Object.keys(acceptDices);
  const randomDiceIndex = Math.floor(Math.random() * diceKeys.length - 1);
  return diceKeys[randomDiceIndex];
}

function returnNumber(param) {
  return param in acceptDices
    ? Math.ceil(Math.random() * acceptDices[param])
    : `Упс... увы, кость "${param}" неправильная. Вам доступны следующие значения: ${Object.keys(
        acceptDices
      ).join(", ")}`;
}

const randomDice = getRandomDice();

console.log(returnNumber(randomDice));
