let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Skittles", price: 3.49 },
  { product: "Twizzlers", price: 4.29 },
  { product: "Reese's Pieces", price: 3.99 },
  { product: "Snickers", price: 3.49 },
  { product: "Hershey's Kiss", price: 2.99 },
  { product: "Gummy Bears", price: 5.29 },
];

// which candies cost less than $4.00?
let cheapCandies = products.filter((candy) => parseFloat(candy.price) <= 4);
console.log("Candies $4.00 or less:");
cheapCandies.forEach((candy) => console.log(`$${candy.price.toFixed(2)}`));

// which candies has "M&M" in its name?
console.log("\nM&M Products:");
let mmCandies = products.filter((candy) => candy.product.includes("M&M"));
mmCandies.forEach((candy) => console.log(candy.product));

// Do we carry "Swedish Fish"?
let swedishFish = products.find((candy) => candy.product === "Swedish Fish");
console.log(`\nDo we carry Swedish Fish? ${swedishFish ? "Yes" : "No"}`);
