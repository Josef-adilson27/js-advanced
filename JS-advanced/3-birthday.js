

//функция валлидации возраста. Если больше 14 вернуть false иначе true

function ageValidation(date) {

  let data = "";

  //если формат анг. то конвертируем в русс. 

  (date.includes("/"))?
  data = date.split("/").reverse().join("-"):
  data = date;
  

  const [YY, MM, DD] = data.split("-");

  const difference = (new Date().getTime() - new Date(YY, MM, DD).getTime()) /(1000 * 60 * 60 * 24 * 30 * 12);
  
  return Math.floor(difference)>14? true : false
   
}

console.log(ageValidation("2022-11-09")) ///false
console.log(ageValidation("1996-11-09")) ///true


console.log(ageValidation("09/11/2022")) ///false
console.log(ageValidation("09/11/1996")) ///true

