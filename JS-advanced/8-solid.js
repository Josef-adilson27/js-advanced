class Billing {
  constructor(amount) {
    this.amount = amount;
  }
  calculateTotal() {
    return this.amount
  }
}


class FixedBilling extends Billing {
  calculateTotal() {
    return super.calculateTotal();
  }
}


class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }
  calculateTotal() {
    return this.amount * this.hours;
  }
}


class ItemBilling extends Billing {
    constructor(amount, items) {
      super(amount);
      this.items = items;
    }
    calculateTotal() {
      return this.amount * this.items;
    }
  }
  
  const fixedBilling = new FixedBilling(3000);
  console.log(fixedBilling.calculateTotal());
  
  const hourBilling = new HourBilling(3000, 24);
  console.log(hourBilling.calculateTotal());


  const itemBilling = new ItemBilling(3000, 84);
  console.log(itemBilling.calculateTotal());
  