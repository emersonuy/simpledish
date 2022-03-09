import ASSET_STRING from "../defines/AssetStrings";
import SceneObject from "../SceneObject";

export default class ChoppingBoard extends SceneObject {
	constructor() {
		super(ASSET_STRING.CHOPPING_BOARD);

		this.ingredient = null;
	}

	chop() {
		if (this.ingredient === null) return false;
		if (this.ingredient.isChopped()) return false;
		if (this.ingredient.needsToBeChopped() === false) return false;

		this.ingredient.startChopping();

		return true;
	}

	setIngredient(ingredient) {
		if (this.ingredient !== null) return false;
		if (ingredient.isChopped()) return false;
		if (ingredient.needsToBeChopped() === false) return false;

		this.ingredient = ingredient;

		return true;
	}

	clearIngredient() {
		if (this.ingredient === null) return null;

		let ingredient = this.ingredient;
		this.ingredient = null;

		return ingredient;
	}

	validate() {}
}
