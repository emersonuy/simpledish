import ASSET_STRING from "./defines/AssetStrings";
import DishBuilder from "./dishes/DishBuilder";
import SceneObject from "./SceneObject";

export default class Plate extends SceneObject {
	constructor() {
		super(ASSET_STRING.PLATE);

		this.ingredients = [];
		this.dish_builder = new DishBuilder();
	}

	addIngredient(ingredient) {
		console.log(ingredient);
		this.dish_builder.addIngredient(ingredient);
	}

	dishReady() {
		return this.dish_builder.dishReady();
	}
}
