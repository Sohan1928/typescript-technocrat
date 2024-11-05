{
  // access modifiers

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance() {
      return this._balance;
    }
  }

  class Student extends BankAccount {
    test() {}
  }

  const person1 = new BankAccount(111, "Mr. Smith", 200);
  person1.addDeposit(2);
  const myBalance = person1.getBalance();
  console.log(myBalance);

  //
}
