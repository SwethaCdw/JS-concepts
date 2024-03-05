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