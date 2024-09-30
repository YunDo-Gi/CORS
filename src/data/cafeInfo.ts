import { CafeInfo } from '../types/CafeTypes';

export const cafeInfo: CafeInfo = {
  menu: [
    { item: "Espresso", price: 2.5 },
    { item: "Cappuccino", price: 3.5 },
    { item: "Latte", price: 4 },
    { item: "Mocha", price: 4.5 },
    { item: "Croissant", price: 2 },
    { item: "Blueberry Muffin", price: 2.5 },
  ],
  brewingRecipe: "For our signature pour-over:\n1. Grind 22g of coffee beans\n2. Heat water to 200°F\n3. Wet the filter and discard water\n4. Add ground coffee to filter\n5. Pour 50g of water and wait 30 seconds\n6. Slowly pour remaining water in circular motion\n7. Total brew time should be around 3 minutes",
  coffeeBean: {
    name: "Ethereal Blend",
    origin: "Ethiopia & Colombia",
    flavor: "Notes of blueberry, chocolate, and jasmine",
  },
};