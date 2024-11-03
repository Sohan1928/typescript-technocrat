{
  //

  // ternary operator || optional chaining || nullish coalescing

  const age: number = 25;

  if (age >= 28) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  // ternary operator
  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log(isAdult);

  //nullish coalescing operator
  // null / undefined er upor vitti kore jodi decision making korte hoi tahole nullish coalescing use korbo

  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  console.log({ result1 });

  //
}
