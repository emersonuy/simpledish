import ASSET_STRING from "../defines/AssetStrings";
import WorldObject from "../WorldObject";
import ProgressBar from "../ui/ProgressBar";

export default class ChoppingBoard extends WorldObject {
	constructor() {
		super(ASSET_STRING.CHOPPING_BOARD);

		this.ingredient = null;
	}

	chop() {
		if (this.ingredient === null) return false;
		if (this.ingredient.isChopped()) return false;
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

	setIngredient(ingredient) {
		if (!this.empty()) return false;
		if (ingredient.needsToBeChopped() === false) return false;

		this.ingredient = ingredient;

		return true;
	}

	ingredientChopped() {
		if (this.ingredient === null) return false;

		return this.ingredient.isChopped();
	}

	getChoppedIngredient() {
		if (this.empty()) return null;
		if (!this.ingredient.isChopped()) return null;

		let ingredient = this.ingredient;

		this.ingredient = null;

		return ingredient;
	}

	clearIngredient() {
		if (this.ingredient === null) return null;

		let ingredient = this.ingredient;
		this.ingredient = null;

		return ingredient;
	}

	validate() {}
}
