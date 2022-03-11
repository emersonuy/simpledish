import ASSET_STRING from "../defines/AssetStrings";
import WorldObject from "../WorldObject";
import ProgressBar from "../ui/ProgressBar";

export default class ChoppingBoard extends WorldObject {
	constructor() {
		super(ASSET_STRING.CHOPPING_BOARD);

		this.ingredient = null;
	}

	chop() {
		if (this.empty()) return false;
		if (this.ingredient.chopped()) return false;
		if (this.ingredient.needsToBeChopped() === false) return false;

		this.ingredient.startChopping();
		this.getProgressBar().show();
		let context = this;
		this.ingredient.on("chop_progress", (progress) => {
			let progress_bar = context.getProgressBar();

			progress_bar.setProgress(progress);
		});

		this.ingredient.on("chop_complete", () => {
			context.getProgressBar().hide();
		});

		return true;
	}

	empty() {
		return this.ingredient === null;
	}

	canPutIngredient(ingredient) {
		if (!this.empty()) return false;
		if (ingredient.cooked()) return false;

		return ingredient.needsToBeChopped();
	}

	putIngredient(ingredient) {
		this.ingredient = ingredient;
	}

	removeIngredient() {
		let ingredient = this.ingredient;
		this.ingredient = null;
		ingredient.stopChopping();

		return ingredient;
	}

	ingredientChopped() {
		if (this.ingredient === null) return false;

		return this.ingredient.chopped();
	}

	validate() {}
}
