const dog = () => {
  const sound = 'woof'
  return {
    talk: () => console.log(sound)
  }
}

const sniffles = dog()
sniffles.talk()

// JQUERY call to a button without having to use 'class', 'new' or problems with 'this'
// $('button.myButton')
//   .click(sniffles.talk)