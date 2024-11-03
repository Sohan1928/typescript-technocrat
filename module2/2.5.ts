{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  interface User {
    id: number;
    name: string;
  }

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "John",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resTuple1 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const resTuple2 = createArrayWithTuple<
    string,
    {
      name: string;
    }
  >("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Doe",
    email: "doe@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "John",
    email: "john@gmail.com",
    hasWatch: "Apple",
  });

  //
}
