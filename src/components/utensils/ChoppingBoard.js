export default class ChoppingBoard {
	constructor() {
		this.ingredient = null;
	}

	setIngredient(ingredient) {
		if (ingredient.isChopped()) return;
		if (ingredient.getNeedToChop() === false) return;

		this.ingredient = ingredient;
		ingredient.startChopping();
	}

	clearIngredient() {
		if (this.ingredient === null) return;

		this.ingredient.stopChopping();
		this.ingredient = null;
	}

	update() {}
}
