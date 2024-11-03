{
  //
  // generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //   const mentors: string[] = ["mr.x", "mr.y", "mr.z"];
  const mentors: GenericArray<string> = ["mr.x", "mr.y", "mr.z"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  //object
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "doe",
      age: 25,
    },
    {
      name: "john",
      age: 30,
    },
  ];

  //tuple

  type GenericTuple<x, y> = [x, y];

  const people: GenericTuple<string, string> = ["Mr.x", "Mr.y"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    {
      name: "John",
      email: "john@example.com",
    },
  ];

  //
}
