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

  static helloWorld() {
    console.log("Hello World!")
  }

  static canTeach(instructor) {
    return (instructor.role === 'classroom');
  }
}

Instructor.helloWorld();

let jon = new Instructor({ 'name': 'Jon' });
console.log(
  `${jon.name} can teach? ${Instructor.canTeach(jon)}`
);

let alice = new Instructor({ 'name': 'Alice', 'role': 'classroom' });
console.log(
  `${alice.name} can teach? ${Instructor.canTeach(alice)}`
);