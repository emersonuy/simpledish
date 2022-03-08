import COOKING_STYLE from "../defines/CookingStyles";

export default class Cookware {
	constructor() {
		this.ingredient = null;
		this.cooking_style = COOKING_STYLE.BOIL;
	}

	setCookingStyle(style) {
		this.cooking_style = style;
	}

	canCookIngredient(ingredient) {
		return ingredient.getCookingStyle() === this.cooking_style;
	}

	setIngredient(ingredient) {
		if (ingredient.getNeedToChop() && !ingredient.isChopped()) return;
		if (ingredient.isCooked()) return;
		if (ingredient.getNeedToCook() === false) return;

		this.ingredient = ingredient;
		ingredient.startCooking();
	}

	clearIngredient() {
		if (this.ingredient === null) return;

		this.ingredient.stopCooking();
		this.ingredient = null;
	}

	update() {}
}
