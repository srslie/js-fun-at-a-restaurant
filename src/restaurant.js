//
// class Restaurant {
//   constructor(name, menus) {
//     this.name = name,
//     this.menu = menus
//   }
// }

function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restaurant
};

function addMenuItem(restaurant, item) {
  if (!restaurant.menus[item.type].includes(item)) {
      restaurant.menus[item.type].push(item)
  }
};

function removeMenuItem(restaurant, itemName, itemType) {
  for (var i = 0; i < restaurant.menus[itemType].length; i++) {
    if (restaurant.menus[itemType][i].name === itemName) {
      restaurant.menus[itemType].splice(i, 1)
    return `No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`
    }
  }
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
