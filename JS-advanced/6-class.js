class Car {
    #_brand;
    #_model;
    #_mileage;
  
    constructor(brand, model, mileage) {
      this.#_brand = brand;
      this.#_model = model;
      this.#mileage = mileage;
    }
  
    get #mileage() {
      return this.#_mileage;
    }
    
    set #mileage(value) {
      this.#_mileage = value;
    }
    
    #checkMileage(value) {
      return this.#mileage === value;
    }
    
    changeMileage(value) {
        if(this.#checkMileage(value)){
            console.log(`Пробег ${this.#_mileage} так и остался ${this.#_mileage}`);
        }else{
            console.log(`Пробег ${this.#_mileage}  изменен на ${value}`);
        }
    }
    info() {
        console.log(`Марка: ${this.#_brand}, Модель: ${this.#_model}, Пробег: ${this.#mileage}`         
        );
    }
}

const car = new Car("bmw", "e39", "9000");
car.changeMileage("90000");
console.log(car);
car.info()
