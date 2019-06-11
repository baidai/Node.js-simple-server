const person = {
	name:'Bone',
	age: 37
};

//module.exports = person;


// class
class Person { 
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
  	greeting() {
  		console.log(`Name is ${this.name} age is ${this.age}`);
  }
}

module.exports = Person;
