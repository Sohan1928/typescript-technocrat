{
  //

  //   pick --> jodi kono type theke kichu property niye new ekta type make korte caile pick use korte pari.

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type NameAge = Pick<Person, "name" | "age">;

  //Omit --> jodi kono type theke kono property bad diye onno property gula niye new ekta type make korbe tahole omit use korte pari.

  type ContactInfo = Omit<Person, "name" | "age">;

  // Required--> jodi kono type er sob property k require korte cai tahole require use korte pari. sei type e manually optional thakleo sob change hoye required hoye jabe.

  type PersonRequire = Required<Person>;

  // Partial--> jodi sob property optional korte cai tahole partial use korte pari.

  type PersonPartial = Partial<Person>;

  // Readonly--> jodi kono type er value k only read korte parbe bt white ba kono value change korte parbe na tahole readonly use korte pari.
  type PersonReadonly = Readonly<Person>;

  // Record--> jodi kon object e nijer iccha moto key and value add korte cai tahole record use korte pari.

  const MyObj: Record<string, string> = {};

  //
}
