let menu = [
  // Breakfast menu (index 0)
  [
    { item: "Sausage and Egg Biscuit", price: 3.69 },
    { item: "Bacon and Egg Biscuit", price: 3.49 },
    { item: "Ham and Egg Biscuit", price: 3.29 },
  ],
  // Lunch menu (index 1)
  [
    { item: "Cheeseburger", price: 5.99 },
    { item: "Grilled Chicken Sandwich", price: 6.49 },
    { item: "Caesar Salad", price: 4.99 },
    { item: "Soup of the Day", price: 3.99 },
  ],
  // Dinner menu (index 2)
  [
    { item: "Steak and Potatoes", price: 15.99 },
    { item: "Grilled Salmon", price: 14.99 },
    { item: "Pasta Alfredo", price: 12.99 },
    { item: "Chicken Parmesan", price: 13.99 },
    { item: "Vegetable Stir Fry", price: 11.99 },
  ],
];

// Set meal value (0 = breakfast, 1 = lunch, 2 = dinner)
let meal = 0;

// Display menu based on meal selection
let mealNames = ["Breakfast", "Lunch", "Dinner"];
console.log(`\n${mealNames[meal]} Menu`);
console.log("----------------");

// Get selected meal's items and display them
let selectedMeal = menu[meal];
selectedMeal.forEach((item) =>
  console.log(`${item.item}: $${item.price.toFixed(2)}`)
);

// Test other meals
meal = 1;
console.log(`\n${mealNames[meal]} Menu`);
console.log("----------------");
selectedMeal = menu[meal];
selectedMeal.forEach((item) =>
  console.log(`${item.item}: $${item.price.toFixed(2)}`)
);

meal = 2;
console.log(`\n${mealNames[meal]} Menu`);
console.log("----------------");
selectedMeal = menu[meal];
selectedMeal.forEach((item) =>
  console.log(`${item.item}: $${item.price.toFixed(2)}`)
);
