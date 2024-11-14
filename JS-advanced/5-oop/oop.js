const Person = function(race, name, language){
    this.race = race;
    this.name = name;
    this.language = language
}

/////////////////////орк////////////////////////

const Ork = function(race, name, language, weapon){
    const person = new Person(race, name, language)
    this.race = person.race;
    this.name = person.name;
    this.language = person.language;
    this.weapon = weapon
}

let ork = new Ork('орк','Урук-хай','орчий','топор')

Ork.prototype = Person.prototype;

ork.__proto__.strike = function(){
    console.log('Удар орка');
}
console.log(ork);
ork.strike()

//////////////////////////эльф//////////////////////

const Elf = function(race, name, language,weapon){
    const person = new Person(race, name, language)
    this.race = person.race;
    this.name = person.name;
    this.language = person.language;
    this.weapon = weapon
}

let elf = new Elf('эльф','Легас','эльфийский','заклинание')

Elf.prototype = Person.prototype;

elf.__proto__.spell = function(){
    console.log('Создать заклинание');
}

console.log(elf);
elf.spell()
