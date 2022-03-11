import ASSET_STRING from "./defines/AssetStrings";
import IngredientFactory from "./ingredients/IngredientFactory";
import WorldObject from "./WorldObject";

export default class Crate extends WorldObject {
	constructor(ingredient) {
		super(ASSET_STRING.CRATE);

		this.ingredient = ingredient;
	}

	addToScene(scene, x, y) {
		super.addToScene(scene, x, y);
		this.addOnTop(scene, this.ingredient, 0.5);
	}

	setPosition(x, y) {
		super.setPosition(x, y);

		let ingredient_size = this.ingredient.getSize();
		let crate_size = this.getSize();
		let crate_position = this.getPosition();

		let ingredient_x = crate_size.w / 2 - ingredient_size.w / 2;
		let ingredient_y = crate_size.h / 2 - ingredient_size.h / 2;

		this.ingredient.setPosition(
			crate_position.x + ingredient_x,
			crate_position.y + ingredient_y
		);
	}

	getIngredient() {
		return IngredientFactory.create(this.ingredient.asset_string);
	}
}
