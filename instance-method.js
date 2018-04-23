// OOP
// 	- Class is a blueprint, a list of definitions and functions that describe its behavior
// 	- an instantiation of a class is the house itself

class Instructor {
  constructor({ name, role = 'assistant' }) {
    this.name = name;
    this.role = role;
  }

  renderDetails() {
    console.log(`${this.name}: ${this.role}`)
  }
}

const dude = new Instructor({name: 'Mr. Dude'})
const brayden = new Instructor({name: 'Brayden', role: 'teacher'})
dude.renderDetails();
brayden.renderDetails();