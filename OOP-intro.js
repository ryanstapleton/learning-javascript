// OOP
// 	- Class is a blueprint, a list of definitions and functions that describe its behavior
// 	- an instantiation of a class is the house itself

class Instructor {
  constructor({ name }) {
    this.name = name;
  }
}

const dude = new Instructor({name: 'Mr. Dude'})
console.log(dude.name);