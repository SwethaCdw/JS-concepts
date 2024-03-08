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

//Prototype
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.calculateSpeed = function(distance, time) {
  return distance / time;
};

const car1 = new Car('Toyota', 'Camry', 2018);
const car2 = new Car('Honda', 'Civic', 2020);

const speed1 = car1.calculateSpeed(100, 2);
console.log(`The speed of ${car1.make} ${car1.model} is ${speed1} mph.`);

const speed2 = car2.calculateSpeed(150, 3);
console.log(`The speed of ${car2.make} ${car2.model} is ${speed2} mph.`);

// Bank example

function Account(owner, initialBalance) {
  this.owner = owner;
  this.balance = initialBalance;
}

Account.prototype.deposit = function(amount) {
  this.balance += amount;
  return `Deposited ${amount} dollars. New balance: ${this.balance} dollars.`;
};

Account.prototype.withdraw = function(amount) {
  if (amount > this.balance) {
      return `Insufficient funds. Current balance: ${this.balance} dollars.`;
  } else {
      this.balance -= amount;
      return `Withdrawn ${amount} dollars. New balance: ${this.balance} dollars.`;
  }
};

const account1 = new Account('John Doe', 1000);
const account2 = new Account('Jane Smith', 2000);

console.log(account1.deposit(500)); 
console.log(account1.withdraw(200)); 
console.log(account1.withdraw(1500));
console.log(account2.deposit(1000)); 

//Fetch API

function fetchDataFromAPI1(callback) {
  setTimeout(() => {
      const data = ['Pooj', 'Riya', 'Sano'];
      callback(null, data);
  }, 2000);
}

function fetchDataFromAPI2(callback) {
  setTimeout(() => {
      const data = ['Apple', 'Banana', 'Orange'];
      callback(null, data);
  }, 3000);
}

function processDataAndDisplay(data1, data2, additionalData) {
  console.log('Data from API 1:', data1);
  console.log('Data from API 2:', data2);
  console.log('Additional Data:', additionalData);

  const combinedData = data1.concat(data2).concat(additionalData).join(', ');

  console.log('Combined data:', combinedData);
}

fetchDataFromAPI1((error1, data1) => {
  if (error1) {
      console.error('Error fetching data from API 1:', error1);
      return;
  }

  fetchDataFromAPI2((error2, data2) => {
      if (error2) {
          console.error('Error fetching data from API 2:', error2);
          return;
      }

      const additionalData = ['Swetha', 'Shyamala', 'Prakashan'];

      processDataAndDisplay(data1, data2, additionalData);
  });
});

//Generator

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateSequence();

console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3
console.log(generator.next().value); // Output: undefined


//Fibonacci generator
function* fibonacciGenerator() {
  let prev = 0;
  let curr = 1;
  while (true) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
  }
}

function printFibonacci() {
  const generator = fibonacciGenerator();

  setInterval(() => {
      const fibonacciNumber = generator.next().value;
      console.log(fibonacciNumber);
  }, 1000); 
}

printFibonacci();

var show = (a, b=200) => {
  console.log(a + " " + b);
}
show(100);

var show = (a, ...args) => {  
  console.log(a + " " + args);  
}  
show(100,200,300,400,500,600,700,800);  


//

class Pen {
  constructor(name, color, price){
      this.name = name;
      this.color = color; 
      this.price = price;
  }
  
  showPrice(){
      console.log(`Price of ${this.name} is ${this.price}`);
  }
}

const pen1 = new Pen("Marker", "Blue", "$3");
pen1.showPrice();


//

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];

console.log(combinedArray);

//
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4, 5));


//

function filterAndSum(threshold, ...numbers) {
  const filteredNumbers = numbers.filter(num => num <= threshold);

  const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);

  return sum;
}

const originalNumbers = [10, 20, 30, 40, 50];

const additionalNumbers = [25, 35, 45, 55]; 

const threshold = 40;

const totalSum = filterAndSum(threshold, ...originalNumbers, ...additionalNumbers);

console.log(totalSum);