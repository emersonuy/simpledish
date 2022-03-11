import COOKING_STYLE from "../defines/CookingStyles";
import WorldObject from "../WorldObject";

export default class Cookware extends WorldObject {
	constructor(asset_string) {
		super(asset_string);

		this.ingredient = null;
		this.cooking_style = COOKING_STYLE.BOIL;
	}

	cook() {
		if (this.empty()) return;
		if (this.ingredient.cooked()) return;

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

	ingredientCooked() {
		if (this.ingredient === null) return false;

		return this.ingredient.cooked();
	}

	empty() {
		return this.ingredient === null;
	}

	canPutIngredient(ingredient) {
		if (!this.empty()) return false;
		if (ingredient.needsToBeChopped() && !ingredient.chopped()) return false;

		return ingredient.needsToBeCooked();
	}

	putIngredient(ingredient) {
		this.ingredient = ingredient;
	}

	removeIngredient() {
		let ingredient = this.ingredient;
		this.ingredient = null;
		ingredient.stopCooking();

		return ingredient;
	}

	update() {}
}
