//Functional scope

function multiplierGenerator(factor) {
  function multiplier(number) {
    return factor * number;
  }

  return multiplier;
}

const multiplyBy5 = multiplierGenerator(5);

console.log(multiplyBy5(2)); // Output: 10 
console.log(multiplyBy5(3)); // Output: 15 

const multiplyBy10 = multiplierGenerator(10);

// Use the multiplier function
console.log(multiplyBy10(2)); // Output: 20 
console.log(multiplyBy10(3)); // Output: 30 


function createTotalCalculator(discountPercentage) {
  return function(items) {
    const subtotal = items.reduce((total, item) => total + item.price, 0);
    const discount = subtotal * (discountPercentage / 100);
    const totalPrice = subtotal - discount;
    return totalPrice;
  };
}

const items = [
  { name: 'Shoes', price: 50 },
  { name: 'T-shirt', price: 20 },
  { name: 'Jeans', price: 70 }
];

const calculateTotalWithDiscount = createTotalCalculator(10);

const totalPrice = calculateTotalWithDiscount(items);
console.log('Total price after 10% discount:', totalPrice);

//Null, Undefined and empty string

function checkValue(value) {
  if (value === null) {
    console.log('The value is null');
  } else if (value === undefined) {
    console.log('The value is undefined');
  } else {
    console.log('The value is:', value);
  }
}

checkValue(null);
checkValue(undefined);
checkValue(0);
checkValue('');
checkValue([]);
checkValue({});

//Closure and currying
 
function createGreeter(greeting) {
  return function(name) {
      return greeting + ', ' + name;
  };
}
 
const englishGreeter = createGreeter('Hello');
const spanishGreeter = createGreeter('Hola');
const frenchGreeter = createGreeter('Bonjour');
 
console.log(englishGreeter('John')); // Output: Hello, John!
console.log(spanishGreeter('Maria')); // Output: Hola, Maria!
console.log(frenchGreeter('Pierre')); // Output: Bonjour, Pierre!
 
 
function add(x, y) {
  return x + y;
}
 
function curriedAdd(x) {
  x=10;
  return function(y) {
      return x + y;
  };
}
 
const add5 = curriedAdd(5);
console.log(add5);
const output = console.log('Swetha' ,curriedAdd(5)(6)); // 11
 
console.log('Add 5 + 3',add5(3)); // Output: 8
console.log('Add 5 + 7',add5(7)); // Output: 12
 
 
function sum(a) {
  return (b, c) => {
      return a * b * c
  }
}
 
//Method one
let x = sum(10);
console.log(x(3,12));
console.log(x(20,12));
console.log(x(20,13));
 
//Method two
console.log(sum(10)(3,12));
console.log(sum(10)(20,12));
console.log(sum(10)(20,13));
 
 
//Async await Promise
 
function fetchUserData() {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve({ id: 1, name: 'John', username: 'john_doe' });
      }, 1000);
  });
}
 
function fetchUserPosts(userId) {
  return new Promise(resolve => {
      setTimeout(() => {
          if (userId === 1) {
              resolve([
                  { id: 1, title: 'First post', body: 'This is the first post.' },
                  { id: 2, title: 'Second post', body: 'This is the second post.' }
              ]);
          } else {
              reject('User ID not found');
          }
      }, 1500);
  });
}
 
async function displayUserDataAndPosts() {
  try {
      console.log('Fetching user data...');
      const userData = await fetchUserData();
 
      console.log('Fetching user posts...');
      const userPosts = await fetchUserPosts(userData.id);
 
      console.log('User data:', userData);
      console.log('User posts:', userPosts);
  } catch (error) {
      console.error('Error:', error);
  }
}
 
displayUserDataAndPosts();