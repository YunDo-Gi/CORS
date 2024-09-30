export interface CafeInfo {
    menu: { item: string; price: number }[];
    brewingRecipe: string;
    coffeeBean: { name: string; origin: string; flavor: string };
  }