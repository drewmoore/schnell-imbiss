const { getMenuItemNames, getMenuItemPrices, getPizzaToppings, placeOrder } = require('../src/app');

describe('App', () => {
  describe('getMenuItemNames', () => {
    it('returns names of all menu items', () => {
      const expectedNames = ['Döner Kebab', 'Currywurst & Pommes', 'Pizza', 'Falafel im Brot', 'Leckeres Eis'];
      const results = getMenuItemNames();

      expect(results).toEqual(expectedNames);
    });

    it('returns names of menu items within a given limit', () => {
      const expectedMenuItemNames = ['Döner Kebab', 'Currywurst & Pommes'];
      const results = getMenuItemNames(2);

      expect(results).toEqual(expectedMenuItemNames);
    });
  });

  describe('getMenuItemPrices', () => {
    it('returns localised prices of menu items in german', () => {
      const menuItemNames = ['Pizza', 'Leckeres Eis'];
      const expectedPrices = ['7,50 €', '2,00 €'];
      const results = getMenuItemPrices(menuItemNames, 'de');

      expect(results).toEqual(expectedPrices);
    });

    it('returns localised prices of menu items in british english', () => {
      const menuItemNames = ['Döner Kebab', 'Falafel im Brot'];
      const expectedPrices = ['€3.00', '€3.50'];
      const results = getMenuItemPrices(menuItemNames, 'en-GB');

      expect(results).toEqual(expectedPrices);
    });

    it.only('throws an error if the provided locale is not supported', () => {
      const menuItemNames = ['Currywurst & Pommes'];
      const unsupportedLocale = 'Dothraki';
      const expectedErrorMessage = `Locale ${unsupportedLocale} not supported!`;

      expect(() => {
        getMenuItemPrices(menuItemNames, unsupportedLocale)
      }).toThrow(expectedErrorMessage);
    });
  });

  describe('getPizzaToppings', () => {
    it("returns the pizza varietys toppings", () => {
      const nameOfVariety = "Sucuk";
      const expectedToppings = [
        "Gouda",
        "Hirtenkäse",
        "Sucuk",
        "Zwiebeln",
        "Oliven",
      ];
      expect(getPizzaToppings(nameOfVariety)).toEqual(expectedToppings);
    });
  });

  describe('placeOrder', () => {
    it("return a string with information about the order including items and total price", () => {
      const order = { "Leckeres Eis": 2, Pizza: 3 };
      const results = placeOrder(order, "de");
      const expectedOutput =
        "Thank you for dining with Schnell Imbiss! Here is your order of: 2 x Leckeres Eis 3 x Pizza. Your total is: 26,50 €";
      expect(results).resolves.toBe(expectedOutput);
    });
  });
});
