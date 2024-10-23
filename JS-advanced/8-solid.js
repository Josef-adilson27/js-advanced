class Billing {
  constructor(amount) {
    this.amount = amount;
  }

  CalculateTotal() {}
}

class FixedBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
  CalculateTotal() {
    return this.amount;
  }
}


class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }
  CalculateTotal() {
    return this.amount * this.hours;
  }
}


class ItemBilling extends Billing {
    constructor(amount, items) {
      super(amount);
      this.items = items;
    }
    CalculateTotal() {
      return this.amount * this.items;
    }
  }
  

  const hourBilling = new HourBilling(3000, 24);
  console.log(hourBilling.CalculateTotal());


  const fixedBilling = new FixedBilling(3000);
  console.log(fixedBilling.CalculateTotal());
  

  const itemBilling = new ItemBilling(3000, 84);
  console.log(itemBilling.CalculateTotal());
  