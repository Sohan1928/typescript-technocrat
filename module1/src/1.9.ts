{
  //
  // union types

  // union type mane ami jeta bujhi--> hoi eta na hoi oita

  type FrontendDeveloper = "fakibaziDeveloper" | "juniorDeveloper";

  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female"; //erokom type er string k bole string literal
    bloodGroup: "A+" | "B+" | "AB+" | "O+";
  };

  const user: User = {
    name: "michel",
    gender: "male",
    bloodGroup: "B+",
  };

  // intersection types

  // intersection type mane ami jeta bujhi--> sobgulai hote hobe.

  type FrontendDevelopers = {
    skills: string[];
    designation1: "FrontendDeveloper";
  };

  type BackendDevelopers = {
    skills: string[];
    designation2: "BackendDeveloper";
  };

  type FullstackDeveloper = FrontendDevelopers & BackendDevelopers;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS", "MONGOOSE"],
    designation1: "FrontendDeveloper",
    designation2: "BackendDeveloper",
  };

  //
}
