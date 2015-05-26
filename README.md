# Node constant

Make variable become constant for javascript ES5.


## Quickly start

```js
var Constant = require('node-const');

var obj = {
	name: 'Alan',
	lessons: [{
		id: 1,
		name: 'English',
	}]
};

// normal assignment
obj.age = 21;
obj.lessons.push({
	id: 2,
	name: 'Math',
});

console.log(obj);
/*
{ name: 'Alan',
  age: 21,
  lessons: [ { id: 1, name: 'English' }, { id: 2, name: 'Math' } ] }
*/

Constant(obj);

// useless assignment
obj.name = 30;
obj.lessons[0] = 99;
obj.lessons[0].id = 99;
obj.lessons[0].name = 'Biology';
obj.gender = 'female';

console.log(obj);
/*
{ name: 'Alan',
  age: 21,
  lessons: [ { id: 1, name: 'English' }, { id: 2, name: 'Math' } ] }
*/
```

To export

```js
var _ = require('node-const');

module.exports = _({
	name: 'Alan',
	lessons: [{
		id: 1,
		name: 'English',
	}]
});

```

To Class

```js
var define = require('node-const').define;

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

```

