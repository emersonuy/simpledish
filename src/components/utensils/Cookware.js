import COOKING_STYLE from "../defines/CookingStyles";
import WorldObject from "../WorldObject";

export default class Cookware extends WorldObject {
	constructor(asset_string) {
		super(asset_string);

		this.ingredient = null;
		this.cooking_style = COOKING_STYLE.BOIL;
	}

	cook() {
		this.ingredient.startCooking();

		let context = this;
		this.getProgressBar().show();
		this.ingredient.on("cook_progress", (progress) => {
			context.getProgressBar().setProgress(progress);
		});

		this.ingredient.on("cook_complete", () => {
			context.getProgressBar().hide();
		});
	}

	setCookingStyle(style) {
		this.cooking_style = style;
	}

	canCookIngredient(ingredient) {
		return ingredient.getCookingStyle() === this.cooking_style;
	}

	isIngredientCooked() {
		if (this.ingredient === null) return false;

		return this.ingredient.isCooked();
	}

	setIngredient(ingredient) {
		if (ingredient.needsToBeChopped() && !ingredient.isChopped()) return false;
		if (ingredient.isCooked()) return false;
		if (ingredient.needsToBeCooked() === false) return false;

		this.ingredient = ingredient;
		this.cook();
		return true;
	}

	getCookedIngredient() {
		if (this.ingredient === null) return null;
		if (!this.ingredient.isCooked()) return null;

		let ingredient = this.ingredient;
		this.ingredient = null;

		return ingredient;
	}

	clearIngredient() {
		if (this.ingredient === null) return;

		this.ingredient.stopCooking();
		this.ingredient = null;
	}

	update() {}
}
