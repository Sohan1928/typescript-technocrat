// Reference type -->Object

const user: {
  readonly firstName: "John"; //type -->literal types
  lastName: string;
  age: number;
  hobbies?: string[]; //optional type
} = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
  //   hobbies: ["cricket", "football", "reading"],
};
