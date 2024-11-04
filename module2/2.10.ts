{
  // mapped types

  const arrOfNumbers: number[] = [1, 2, 3];

  //   const arrOfString: string[] = arrOfNumbers.map((number) => {
  //     number.toString();
  //   });
  //   console.log(arrOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  //
}
