import SceneObject from "../SceneObject";

export default class Dish extends SceneObject {
	constructor(asset_string) {
		super(asset_string);

		this.name = "";
		this.ingredients = [];
	}

	setName(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}

	addIngredient(ingredient) {
		this.ingredients.push(ingredient);
	}
}
