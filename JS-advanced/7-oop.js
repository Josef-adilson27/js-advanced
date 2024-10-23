class Person {
    constructor(race, name, language) {
      this.race = race;
      this.name = name;
      this.language = language;
    }
    speak() {
      console.log(`Я ${this.race}, мое имя ${this.name}, и я говорю`);
    }
  }
  
  class Ork extends Person {
    constructor(race, name, language, weapon) {
      super(race, name, language);
      this.weapon = weapon;
    }
    strike() {
      console.log(`удар ${this.name}: ${this.weapon}`);
    }
  }
  
  const ork = new Ork("орк", "урук-хай", "орчий", "топор");
  
  ork.speak();
  ork.strike();
  
  
  class Elf extends Person {
    constructor(race, name, language, spell) {
      super(race, name, language);
      this.spell = spell;
    }
    strike() {
      console.log(`${this.name} заклинает`);
    }
  }
  
  const elf = new Elf("эльф", "Легалас", "эльфийский");
  elf.speak();
  elf.strike();
  