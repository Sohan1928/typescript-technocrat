{
  // conditional type

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasCheckVehicle = CheckVehicle<"car">;

  //
}
