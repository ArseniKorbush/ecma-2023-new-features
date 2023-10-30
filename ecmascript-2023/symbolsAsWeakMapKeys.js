const key = Symbol('myKey');

const myWeakMap = new WeakMap();

const myObject = {};

myWeakMap.set(key, myObject);

// Get the value associated with the symbol key
const retrievedObject = myWeakMap.get(key);

console.log(retrievedObject === myObject); // Output: true


const privateData = new WeakMap();

class User {
  constructor(name) {
    
    const uniqueKey = Symbol('privateData');

    privateData.set(this, { name });

    this[uniqueKey] = true;
  }

  getName() {
    return privateData.get(this).name;
  }
}

const user1 = new User('Alice');
const user2 = new User('Bob');

console.log(user1.getName()); // Output: 'Alice'
console.log(user2.getName()); // Output: 'Bob'

// Attempting to access private data directly will not work
console.log(user1.name); // Output: undefined
console.log(user2.name); // Output: undefined

