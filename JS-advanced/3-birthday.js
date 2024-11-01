//функция валлидации возраста. Если больше 14 вернуть false иначе true

function ageValidation(birthDate) {
  const today = new Date();
  const birthDateObj = new Date(birthDate);

  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();

  //Корректировка возраста  на месяцы - наступил ли еще в этом году день рождение
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }  
  return age > 14 ? true : false
}

console.log(ageValidation("10/07/2019")); //false
console.log(ageValidation("1996-11-09")); //true
