const menu = require('./menu');

// "Private" functions

/**
 * For the given menu item names, return the full menu items.
 * @param {Array} menuItemNames - the names of the items that we need
 * @returns {Array} the full item objects
 */
const getItemsForNames = (menuItemNames) => (
  Object.values(menu).filter((item) => menuItemNames.includes(item.name))
);

/**
 * Convert a number to a price string in the given locale
 * @param {number} price - the numerical price to be formatted into a localised string
 * @param {string} locale - represents the localisation (language and region) to be used to represent prices
 * @returns {string} the formatted, localised price
 */
const localisePrice = (price, locale) => {
  /*
   * Implement me!
   * Hint: .toFixed() might help...
   */

  return price;
};

// "Public" functions

/**
 * Get the names of all or some of the names of items on the menu.
 * @param {number} [limit=null] - a limit to the number of results to be returned
 * @returns {Array} names of all items on the menu
 */
const getMenuItemNames = (limit = null) => {
  const allNames = Object.values(menu).map((menuItem) => menuItem.name);

  /*
   * Can you implement a limit here? I bet you can...
   */

  return allNames;
};

/**
 * Get the prices of given menu items in the provided localisation.
 * @param {Array} menuItemNames - the names of the items whose prices we need
 * @param {string} locale - represents the localisation (language and region) to be used to represent prices
 * @returns {Array} prices for the items
 */
const getMenuItemPrices = (menuItemNames, locale) => {
  const supportedLocales = ['de', 'en-GB'];
  // Write a "guard clause" here to throw an error if the supportedLocales do not include the given locale

  // Select all menu items that have the provided names
  const items = getItemsForNames(menuItemNames);
  // Get the prices from each of the items
  const prices = [];
  // Format the prices into localised strings.
  const localisedPrices = prices.map((price) => (localisePrice(price, locale)));

  return localisedPrices;
};

/**
 * Get the toppings for a given pizza variety.
 * @param {string} varietyName - name of a pizza variety on the menu
 * @returns {Array} pizza toppings for the variety
 */
const getPizzaToppings = (varietyName) => {
  const variety = menu.pizza.varieties.filter((candidate) => candidate.name === varietyName)[0];

  if (!variety) {
    throw new Error(`The menu has no pizza variety named ${varietyName}`);
  }

  return variety.toppings;
};

/**
 * Place your order. Tell our Mitarbeiter*innen what you want and how much. Provide the locale for displaying
 * your total price. This one takes just a little bit of time, so you'll have to wait a bit..
 * @param {Object} itemsAndQuantities - item names for keys and their quantities as values
 * @param {string} locale - represents the localisation (language and region) to be used to represent prices
 * @returns {Promise<string>} A report of your order and your total. Enjoy!
 */
const placeOrder = (itemsAndQuantities, locale) => {
  const priceTotal = Object.keys(itemsAndQuantities).reduce((total, itemName) => {
    const quantity = itemsAndQuantities[itemName];
    total += getItemsForNames([itemName])[0].price * quantity;
    return total;
  }, 0);
  // Bonus: we iterate through itemsAndQuantities twice. Once we have test coverage, we can probably refactor
  // for optimisation...
  const messageWithoutTotal = Object.keys(itemsAndQuantities).reduce((message, itemName) => {
    const quantity = itemsAndQuantities[itemName];
    message += ` ${quantity} x ${itemName}`;
    return message;
  }, 'Thank you for dining with Schnell Imbiss! Here is your order of:');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        `${messageWithoutTotal}. Your total is: ${localisePrice(priceTotal, locale)}.`
      );
    }, 1000);
  });
};

module.exports = { getMenuItemNames, getMenuItemPrices, getPizzaToppings, placeOrder };
