import ASSET_STRING from "../defines/AssetStrings";
import DISH from "../defines/DishNames";
import INGREDIENT from "../defines/IngredientNames";

const DISH_READY = 0;

const DISH_TABLE = [
	{
		name: DISH.FISH_MAKI,
		asset_string: ASSET_STRING.FISH_MAKI,
		ingredients: [INGREDIENT.FISH, INGREDIENT.NORI, INGREDIENT.RICE],
	},

	{
		name: DISH.SASHIMI,
		asset_string: ASSET_STRING.SASHIMI,
		ingredients: [INGREDIENT.FISH],
	},
];

const DishInspector = {
	dishReady(dish) {
		let ingredients = dish.getIngredients();

		let dish_meta = this.getDishWithTheseIngredients(ingredients);

		if (dish_meta === null) return false;

		dish.setName(dish_meta.name);
		dish.setAssetString(dish_meta.asset_string);
		return true;
	},

	getDishWithTheseIngredients(ingredients) {
		let dish_meta = null;

		for (let i = 0; i < DISH_TABLE.length; i++) {
			let test_dish_meta = DISH_TABLE[i];
			let dish_found = true;
			let dish_ingredients = [...DISH_TABLE[i].ingredients];

			for (let j = 0; j < ingredients.length; j++) {
				let ingredient_name = ingredients[j].getName();

				for (let k = 0; k < dish_ingredients.length; k++) {
					if (dish_ingredients[k] === ingredient_name) {
						dish_ingredients.splice(k, 1);
						k--;
					}
				}
			}

			if (dish_ingredients.length === 0) {
				dish_meta = DISH_TABLE[i];
				break;
			}
		}

		return dish_meta;
	},
};

export default DishInspector;
