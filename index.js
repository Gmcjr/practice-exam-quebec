const purchases = [
  {
    product: "Ergofit Wired Earbuds",
    category: "Electronics",
    quantity: 2,
    price: 12.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Great noise-cancelling feature."
      }
    ]
  },
  {
    product: "LG Bluray Player Replacement Remote Control",
    category: "Electronics",
    quantity: 1,
    price: 6.99,
    mostLikedReviews: [
      {
        rating: 1,
        text: "Product didn't come with batteries."
      },
      {
        rating: 2,
        text: "Package was damaged."
      }
    ]
  },
  {
    product: "McCormick Grill Mates Chipotle Pepper Marinade (12 pk)",
    category: "Grocery",
    quantity: 3,
    price: 15.50,
    mostLikedReviews: [
      {
        rating: 1,
        text: "The marinade packets were damaged."
      }
    ]
  },
  {
    product: "Luxardo Gourmet Cocktail Cherries",
    category: "Grocery",
    quantity: 1,
    price: 24.45,
    mostLikedReviews: [
      {
        rating: 5,
        text: "You can taste the difference between these and marachinos."
      },
      {
        rating: 5,
        text: "I use these all the time for parties."
      }
    ]
  },
  {
    product: "Blood Pressure Monitor",
    category: "Medical Supplies and Equipment",
    quantity: 1,
    price: 49.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Matches my blood pressure at the doctor's office."
      }
    ]
  }
];


// #1 // 
function getNumberEntries(purchase){
// iterate through object and return new array of subarrays
let newArray = [];
// if the value is a number
  for (let key in purchase) {
    if (typeof purchase[key] === 'number') {
// each subarray should include the key and the value from the object
      newArray.push([key , purchase[key]]);
    }  
  }
  return newArray;
};


// #2 // 
const addKeyValuePairs = function(purchase, additions){
// I: purchase object, addition(array of subarrays where each subarray is a key and value)
// O: add each subbarray's key and value(from additions) to the object
// and return object
// iterate over additions array and access subarrays
for (let i = 0; i < additions.length; i++) {
  let subArray = additions[i];
  let key = subArray[0];
  let value = subArray[1];
// add to purchase object
  purchase[key] = value;
}
return purchase
};

               

// 3 //
const filterByPrice = function(array, price){
// I: array (of purchase objects) and price(number)
// O: new array of only items whose price > input price
// C: use filter method
// filter over array, callback function tests purchase object price
// against price input parameter
  let result = array.filter(function(purchase) {
    return purchase.price > price;
  });
  // return only items that pass test
  return result;
};

// 4 //
const mapPurchases = function(array){
  
};


// #5 //
const accumulateString = function(array){
  
};


// #6 //
const findProduct = function(array, product){
 
};


// #7 //
const filterByReviewLength = function(array){
  
};

