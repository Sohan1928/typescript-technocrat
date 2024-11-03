{
  //
  // Interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  const User2 = {
    name: "John Doe",
    age: 25,
  };

  //   type extend
  //with type alias
  type UserWithRole1 = User1 & { role: string };
  const user3: UserWithRole1 = {
    name: "John Doe",
    age: 25,
    role: "Admin",
  };

  //   type interface
  interface UserWithRole2 extends User2 {
    role: string;
  }

  const User4: UserWithRole2 = {
    name: "John doe",
    age: 25,
    role: "Moderator",
  };

  //array
  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number; //index signature
  }

  const rollNumber1: Roll1 = [1, 2, 3];
  const rollNumber2: Roll2 = [1, 2, 3];
  //function
  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add1: Add1 = (num1, num2) => num1 + num2;

  const add2: Add2 = (num1, num2) => num1 + num2;

  //
}
