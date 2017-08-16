var transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'CJ Cherryh',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XS Doodad', price: -0.50 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Basic Gadget', price: -2.00 },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Frederik Pohl',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Clarke Computing',
    items: [
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Neal Stephenson',
    items: [
      { name: 'kilobyte', price: 1024.00 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
    ]
  }
];


// --------------------------------------------------
// EXAMPLE QUESTION
// --------------------------------------------------
/*
  Calculate the total number of transactions.
*/
var totalTransactions = transactions.length;

console.log( 'The total number of transactions is:', totalTransactions );


// --------------------------------------------------
// QUESTION 01 Calculate the total number of 'sales'.
// --------------------------------------------------

var numSales = [];

for (var i = 0; i < transactions.length; i++) {
  if(transactions[i].type === 'sale'){
    numSales.push(transactions[i].type)
  }
}

console.log( 'The total number of sales is:', numSales.length );

// --------------------------------------------------
// QUESTION 02 Calculate the total number of 'purchases'.
// --------------------------------------------------

var numPurchases = [];

for (var i = 0; i < transactions.length; i++){
  if(transactions[i].type === 'purchase'){
    numPurchases.push(transactions[i].type);
  }
}

console.log( 'The total number of purchases is:', numPurchases.length);

// --------------------------------------------------
// QUESTION 03 Calculate the total number of 'cash' 'sales'.
// --------------------------------------------------

var numCashSales = [];

for (var i = 0; i < transactions.length; i++) {
  if(transactions[i].type === 'sale' && transactions[i].paymentMethod ==='cash'){
    numCashSales.push(transactions[i]);
  }
}

console.log( 'The total number of cash sales is:', numCashSales.length);

// --------------------------------------------------
// QUESTION 04 Calculate the total number of 'credit' 'purchases'.
// --------------------------------------------------

var numCreditPurchases = [];

for (var i = 0; i < transactions.length; i++) {
  if(transactions[i].type === 'purchase' && transactions[i].paymentMethod ==='credit'){
    numCreditPurchases.push(transactions[i]);
  }
}

console.log( 'The total number of credit purchases is:', numCreditPurchases.length);

// --------------------------------------------------
// QUESTION 05 Create an array that includes all of vendors which appear in the transactions data set.
// --------------------------------------------------

var uniqueVendors = [];

for (var i = 0; i < transactions.length; i++){
  if(transactions[i].vendor){
    uniqueVendors.push(transactions[i].vendor);
  }
}

console.log( 'The unique vendors are:', uniqueVendors );

// --------------------------------------------------
// QUESTION 06 Create an array that includes all of *unique* customers which appear in the transactions data set.
// --------------------------------------------------

var uniqueCustomers = [];

for (var i = 0; i < transactions.length; i++){
  if(transactions[i].customer){
    if(!uniqueCustomers.includes(transactions[i].customer )){
      uniqueCustomers.push(transactions[i].customer);
    }
  }
}

console.log( 'The unique customers are:', uniqueCustomers );


// --------------------------------------------------
// QUESTION 07 Create an array of information about the 'sale' transactions which include 5 or more items.
// --------------------------------------------------

var bigSpenders = [];

for (var i = 0; i < transactions.length; i++){
  if(transactions[i].customer && transactions[i].items.length >= 5){
    bigSpenders.push(transactions[i].customer, transactions[i].items.length)
  }
}

console.log( 'The "big spenders" are:', bigSpenders );

// --------------------------------------------------
// QUESTION 08 Calculate the sum of the *first* 'sale' transaction.
// --------------------------------------------------

var sumSales = 0;
function addPricetoSum(item) {
  sumSales += item.price;
}

for (var i = 0; i < transactions.length; i++){
  if(transactions[i].type === 'sale'){
    transactions[i].items.forEach(addPricetoSum)
    break
  }
}

console.log( 'The sum of all sales is:', sumSales );

// --------------------------------------------------
// QUESTION 09 Calculate the sum of *all* 'purchase' transactions.
// --------------------------------------------------

var sumPurchases = 0;
function addPrice(item) {
  sumPurchases += item.price;}

for (var i = 0; i < transactions.length; i++){
  if(transactions[i].type === 'purchase'){
    transactions[i].items.forEach(addPrice)
  }
}
console.log('The sum of all purhcases is:', sumPurchases );


// --------------------------------------------------
// QUESTION 10   Calculate the company's net profit.
// --------------------------------------------------

var netProfit = 0;
var purchases = 0;
var sales     = 0;
function addSales(item) {
  sales  += item.price;
}
function addPurchases(item) {
  purchases += item.price;
}

for (var i = 0; i < transactions.length; i++){
  if(transactions[i].type === 'purchase'){
    transactions[i].items.forEach(addSales)
  }
  else if(transactions[i].type === 'sale'){
    transactions[i].items.forEach(addPurchases)
  }
}
netProfit = sales + purchases

console.log(sales);
console.log(purchases);
console.log( 'The net profit is:', netProfit );


// --------------------------------------------------
// QUESTION 11 Calculate the most items sold as part of single transaction.
// --------------------------------------------------

var mostItems = [];

for (var i = 0; i < transactions.length; i++) {
  mostItems.push(transactions[i].items.length)
}

console.log( 'The most items sold in a single transaction is:', Math.max.apply(null, mostItems));

// --------------------------------------------------
// QUESTION 12
// --------------------------------------------------
/*
  Calculate the sum of the 'purchase' with the fewest items.
*/
var sumOfSmallestPurchase = 0;
var arrayOfItem = []

for (var i = 0; i < transactions.length; i++){
  arrayOfItem.push(transactions[i].items.length);
}
sumOfSmallestPurchase = Math.min.apply(null, arrayOfItem)

console.log( 'The sum of the smallest purchase is:', sumOfSmallestPurchase );
