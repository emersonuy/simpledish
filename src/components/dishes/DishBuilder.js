import Dish from "../dishes/Dish";

export default class DishBuilder {
	constructor() {
		this.ingredients = [];
	}

	addIngredient(ingredient) {
		this.ingredients.push(ingredient);
	}

	getDish() {
		let dish = new Dish();

		this.ingredients.forEach((ingredient) => {
			dish.addIngredient(ingredient);
		});

		return dish;
	}

	dishReady() {
		return this.getDish().dishReady();
	}
}
