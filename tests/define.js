var define = require('../').define;

function Teacher(name, age) {
	define(this, 'name', name);
	define(this, 'age', age);
}

var alan = new Teacher('Alan', 30);

console.log(alan);
// { name: 'Alan', age: 30 }

alan.name = 'Bob';
console.log('name', alan.name);
// Alan
