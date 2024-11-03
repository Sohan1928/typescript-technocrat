{
  // interface -->generic
  interface Developer<T, Y = null> {
    name: string;
    laptop: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: Y;
  }

  interface XiaomiWatch {
    brand: string;
    model: string;
    display: string;
  }

  const poorDeveloper: Developer<XiaomiWatch> = {
    name: "John Smith",
    laptop: {
      brand: "Lenovo",
      model: "22UR",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Xiaomi",
      model: "kw55",
      display: "Amoled",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface Bike {
    brand: string;
    engineCapacity: string;
    price: string;
  }

  const richDeveloper: Developer<AppleWatch, Bike> = {
    name: "Rich Smith",
    laptop: {
      brand: "HP",
      model: "22UR",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "kw55",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Pulser",
      engineCapacity: "150cc",
      price: "150k",
    },
  };

  //
}
