class Chef {
  constructor(chefName, chefRestaurant) {
    this.name = chefName,
    this.restaurant = chefRestaurant
  }

  greetCustomer(name, isMorning) {
    return morningStatus ? `Good morning, ${name}!` :  return `Hello, ${name}!`
  }

  checkForFood(foodItem) {
    if (this.restaurant.menus[foodItem.type].includes(foodItem)) {
      return `Yes, we're serving ${foodItem.name} today!`
    } else {
    return `Sorry, we aren't serving ${foodItem.name} today.`
    }
  }
};

module.exports = Chef;
