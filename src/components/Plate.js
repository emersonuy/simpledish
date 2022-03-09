import ASSET_STRING from "./defines/AssetStrings";
import SceneObject from "./SceneObject";

export default class Plate extends SceneObject {
	constructor() {
		super(ASSET_STRING.PLATE);

		this.ingredients = [];
	}

	addIngredient(ingredient) {
		this.ingredients.push(ingredient);
	}
}
