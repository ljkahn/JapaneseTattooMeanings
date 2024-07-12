// Prototype methods on constructor function

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

Dog.prototype.nap = function () {
  console.log('Zzzzzzzzz');
};

const dog = new Dog('Rex', 2, 'Bulldog');
// Logging the dog object to show that in the browser, the nap method is now a prototype method and not a property of the object
console.log(dog);

dog.nap();
