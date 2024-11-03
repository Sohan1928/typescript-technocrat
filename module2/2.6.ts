{
  //constraints

  const addCourseToStudent = <
    T extends { name: string; email: string; id: number }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 111,
    name: "Doe",
    email: "doe@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 222,
    name: "John",
    email: "john@gmail.com",
    hasWatch: "Apple",
  });

  //
}
