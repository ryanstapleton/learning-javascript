// function fullname(fName, lName) {
//   console.log(`${fName} ${lName}`)
// }
// fullname('Kristine', 'Hudgens');

// fullname = function (fName, lName) {
//   console.log(`${fName} ${lName}`)
// }
// fullname('Kristine', 'Hudgens');

// helloWorld = () => { console.log('Hi there'); }
// helloWorld();

// Arrow function with shorthand function argument for single arguments. parens are optional
firstName = fname => { console.log(fname.toUpperCase()); }
firstName('Jordan');

fullname = (fName, lName) => {
  console.log(`${fName} ${lName}`)
}
fullname('Kristine', 'Hudgens');