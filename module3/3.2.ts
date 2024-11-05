{
  // opp---> inheritence

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      (this.name = name), (this.age = age), (this.address = address);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }

    getSleep(sleepOfHours: number) {
      console.log(`${this.name} will sleep ${sleepOfHours} hours`);
    }
  }
  const student = new Student("Mr. John", 24, "Uganda");
  student.getSleep(7);

  class Teacher extends Parent {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    getSalary(teacherSalary: number) {
      console.log(
        `${this.name} take salary for 1 month from her designation ${teacherSalary} taka`
      );
    }
  }

  const teacher = new Teacher("Mr. teacher", 35, "Bangladesh", "profession");
  teacher.getSalary(40000);

  //
}
