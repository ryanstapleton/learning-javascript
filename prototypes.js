// class Obj {
//   constructor({ name }) {
//     this.name = name;
//   }

//   hello() {
//     console.log('Hello, my name is ' + this.name);
//   }
// }

// const george = new Obj({name: 'George'});
// george.hello();


// Prototype
var proto = {
  hello: function hello() {
    console.log('Hello, my name is ' + this.name);
  }
};

var george = Object.create(proto);
george.name = 'George';

george.hello();