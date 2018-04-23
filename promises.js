// Promise: Allow asynchronous loading - like loading a page while waiting on API to return posts
// A promise allows for handling situations that don't necessarily happen all at once, especially with communicating with outside services
// - Show page first
// - Then, show posts if available, or show an error ot something else

// Promise has 'resolve' and 'reject' handlers
// - use .then to map to resolve
// - use .catch to map to reject

let sleepyGreeting = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello....')
  }, 2000);

  setTimeout(() => {
    reject(Error('Too sleepy...'))
  }, 2000);
});

sleepyGreeting
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })