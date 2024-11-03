{
  // generic constraint with keyof operator

  //   type Vehicle = {
  //     bike: string;
  //     car: string;
  //     ship: string;
  //   };

  //   type Owner = "bike" | "car" | "ship";
  //   type Owner2 = keyof Vehicle;

  //   const person1: Owner2 = "car";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "John Doe",
    age: 25,
    balance: 100,
  };

  const car = {
    model: "Toyota",
    year: 2020,
  };

  const result1 = getPropertyValue(user, "age");

  //
}
