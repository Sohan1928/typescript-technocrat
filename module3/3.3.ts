{
  // type guard

  type AlphaNumeric = string | number;

  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 * param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  const result1 = add(5, 5);
  console.log("The sum of number is:", result1);
  const result2 = add("2", "3");
  console.log("The sum of string is:", result2);

  // in guard

  interface NormalUser {
    name: string;
  }

  interface AdminUser {
    name: string;
    role: "admin";
  }

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name} and I am a normal user`);
    }
  };

  const normalUser: NormalUser = {
    name: "John Doe",
  };

  const adminUser: AdminUser = {
    name: "Richard",
    role: "admin",
  };

  getUser(adminUser);
  getUser(normalUser);

  //
}
