export default class Dish {
	constructor() {
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
