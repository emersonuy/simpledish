import Dish from "../dishes/Dish";

export default class DishBuilder {
	constructor() {
		this.ingredients = [];
	}

	addIngredient(ingredient) {
		this.ingredients.push(ingredient);
		console.log(this.ingredients);
	}

	getDish() {
		let dish = new Dish();

		console.log(this.ingredients);

		this.ingredients.forEach((ingredient) => {
			console.log(ingredient);
			dish.addIngredient(ingredient);
		});

		console.log(dish);
		return dish;
	}

	dishReady() {
		return this.getDish().dishReady();
	}
}
