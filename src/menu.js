const menu = {
  doenerKebab: {
    name: 'Döner Kebab',
    price: 3
  },
  curryPommes: {
    name: 'Currywurst & Pommes',
    price: 5.25
  },
  pizza: {
    name: 'Pizza',
    price: 7.5,
    varieties: [
      {
        name: 'Margherita Deluxe',
        toppings: ['Gouda', 'Tomatenscheiben', 'Mozzarella', 'Basilikumpesto']
      },
      {
        name: 'Hawaii',
        toppings: ['Gouda', 'Hinterschinken', 'Ananas']
      },
      {
        name: 'Sucuk',
        toppings: ['Gouda', 'Hirtenkäse', 'Sucuk', 'Zwiebeln', 'Oliven']
      }
    ]
  },
  falafelBrot: {
    name: 'Falafel im Brot',
    price: 3.5
  },
  eis: {
    name: 'Leckeres Eis',
    price: 2
  }
};

module.exports = menu;
