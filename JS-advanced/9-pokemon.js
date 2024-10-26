"use strict";

function getPokemon(index) {
  const firstReq = new XMLHttpRequest();
  firstReq.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
  firstReq.send();

  firstReq.addEventListener("load", function () {
    const pokeAbility = JSON.parse(this.responseText).abilities[index].ability.url;

    const secondReq = new XMLHttpRequest();
    secondReq.open("GET", pokeAbility);
    secondReq.send();

    secondReq.addEventListener("load", function () {
      const pokeAbility = JSON.parse(this.responseText);
      const secondReq = new XMLHttpRequest();
      secondReq.open("GET", pokeAbility);
      secondReq.send();

      for (const key in pokeAbility.effect_entries) {  
          if (pokeAbility.effect_entries[key].language.name === "en") {
               console.log(pokeAbility.effect_entries[key]);
          }   
      }
    });
  });
}

console.log(getPokemon(0));
