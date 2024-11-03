{
  //
  // type alias

  // type declare
  //   for object
  type Student = {
    name: string;
    age: number;
    contact?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "John Doe",
    age: 25,
    gender: "Male",
    address: "123 Main St",
  };
  const student2: Student = {
    name: "pho",
    age: 25,
    gender: "Male",
    address: "123 Main St",
  };
  const student3: Student = {
    name: "Michel",
    age: 25,
    gender: "Male",
    address: "123 Main St",
  };

  // for function

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  //
}
