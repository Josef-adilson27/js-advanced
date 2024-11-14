"use strict";

function getPokemon() {
  return fetch("https://pokeapi.co/api/v2/pokemon/ditto");
}

getPokemon()
  .then((result) => result.json())
  .then((result) => getAbility(result, 0));

  
function getAbility(result, index) {
  const url = result.abilities[index].ability.url;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      for (const key in res.effect_entries) {
        res.effect_entries[key].language.name === "en" ? console.log(res.effect_entries[key]) : ''   
      }
    });
}
