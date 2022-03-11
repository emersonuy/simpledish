import ASSET_STRING from "./defines/AssetStrings";
import DishBuilder from "./dishes/DishBuilder";
import WorldObject from "./WorldObject";

export default class Plate extends WorldObject {
	constructor() {
		super(ASSET_STRING.PLATE);

		this.ingredients = [];
		this.dish_builder = new DishBuilder();
	}

	addIngredient(ingredient) {
		this.dish_builder.addIngredient(ingredient);
	}

	dishReady() {
		return this.dish_builder.dishReady();
	}
}
