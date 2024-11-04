{
  // task -01

  const message: string =
    "Hello world, I will complete this course successfully and become a Next level web developer";

  // console.log(message);

  // task -02
  type User = {
    name: string;
    age: number;
    role?: "admin" | "user" | "guest";
  };

  const user1: User = {
    name: "John Doe",
    age: 25,
    role: "admin",
  };

  const user2: User = {
    name: "Jane Doe",
    age: 26,
  };

  // task-03

  type Person = {
    name: string;
    address: string;
    hairColor: string;
    eyeColor: string;
    income: number;
    expense: number;
    familyMember: number;
    job: string;
    skills: string[];
    maritalStatus: string;
    friends: string[];
  };

  const person: Person = {
    name: "John",
    address: "bangladesh",
    hairColor: "black",
    eyeColor: "gray",
    income: 20000,
    expense: 15000,
    familyMember: 5,
    job: "developer",
    skills: ["HTML", "CSS", "React", "TypeScript", "MongoDB"],
    maritalStatus: "married",
    friends: ["doe", "gates", "petty", "kite"],
  };

  // task -04

  interface Book {
    title: string;
    publisher: string;
    year: number;
  }

  interface Magazine {
    title: string;
    publisher: string;
    year: number;
  }

  const book = {
    title: "The Book",
    publisher: "ABC",
    year: 2022,
  };

  const magazine = {
    title: "The Magazine",
    publisher: "XYZ",
    year: 2021,
  };

  type bookOrMagazine = Book | Magazine;

  type bookAndMagazine = Book & Magazine;

  // task -05

  function reverseString(str: string): string {
    return str.split("").reverse().join("");
  }
  const input: string = "hello";
  const reversed: string = reverseString(input);
  console.log(`Originals: ${input}`);
  console.log(`Reversed: ${reversed}`);

  //
}
