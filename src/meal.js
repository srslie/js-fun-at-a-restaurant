function nameMenuItem(item) {
  return `Delicious ${item}`;
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  }
  return menuItem;
}

function addIngredients(item, ingredients) {
  if (!ingredients.includes(item)) {
   ingredients.push(item)};
 };

function formatPrice(price) {
  return `$${price}`;
};

function decreasePrice(price) {
  return price * .9;
};

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  }
  return recipe
};





module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
