import WorldObject from "../WorldObject";
import DishInspector from "./DishInspector";

export default class Dish extends WorldObject {
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

	getIngredients() {
		return this.ingredients;
	}

	dishReady() {
		return DishInspector.dishReady(this);
	}
}
