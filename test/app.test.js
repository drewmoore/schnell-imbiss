const { getMenuItemNames, getMenuItemPrices, getPizzaToppings, placeOrder } = require('../src/app');

describe('App', () => {
  describe('getMenuItemNames', () => {
    it('returns names of all menu items', () => {
      const expectedNames = ['Döner Kebab', 'Currywurst & Pommes', 'Pizza', 'Falafel im Brot','Leckeres Eis'];
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

    it('throws an error if the provided locale is not supported', () => {
      const menuItemNames = ['Currywurst & Pommes'];
      const unsupportedLocale = 'Dothraki';
      const expectedErrorMessage = `Locale ${unsupportedLocale} not supported!`;

      expect(() => {
        getMenuItemPrices(menuItemNames, unsupportedLocale)
      }).toThrow(expectedErrorMessage);
    });
  });

  describe('getPizzaToppings', () => {
    /*
     * Oh no! We have missing test coverage! We better write some tests before we deploy any bugs to production!!!
     * Expected behaviour: getPizzaToppings(NAME_OF_VARIETY) should return an array of this pizza variety's toppings.
     */
    it("should return an array of this pizza variety's toppings", () => {
      const varietyName = 'Margherita Deluxe';
      const varietyToppings = ['Gouda', 'Tomatenscheiben', 'Mozzarella', 'Basilikumpesto'];
      const result = getPizzaToppings(varietyName);

      expect(result).toEqual(varietyToppings);
    })
  });

  describe('placeOrder', () => {
    /*
     * Oh no! More missing test coverage. This one is a bit tricky...
     * Example of expected behaviour:
     *
     * placeOrder({'Leckeres Eis': 2, 'Pizza': 3}, 'de');
     * resolves with:
     * Thank you for dining with Schnell Imbiss! Here is your order of: 2 x Leckeres Eis 3 x Pizza. Your total is: 26,50 €.
     */
    it("should resolve with a message", () => {
      const order = {'Leckeres Eis': 2, 'Pizza': 3};
      const locale = 'de';
      const expectedMessage = "Thank you for dining with Schnell Imbiss! Here is your order of: 2 x Leckeres Eis 3 x Pizza. Your total is: 26,50 €.";

      expect(placeOrder(order,locale)).resolves.toThrow(expectedMessage);
    });
  });
});
