{
  // oop---->object oriented programming

  // class

  class Animal {
    // name: string;
    // species: string;
    // sounds: string;

    // parameter properties

    constructor(
      public name: string,
      public species: string,
      public sounds: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sounds = sounds;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sounds}`);
    }
  }

  const dog = new Animal("German Shepard bhai", "dog", "ghew ghew");

  dog.makeSound();

  //
}
