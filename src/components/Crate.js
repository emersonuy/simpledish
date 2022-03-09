import ScaleHelper from "../../helpers/ScaleHelper";
import ASSET_STRING from "./defines/AssetStrings";
import IngredientFactory from "./ingredients/IngredientFactory";
import SceneObject from "./SceneObject";

export default class Crate extends SceneObject {
	constructor(ingredient) {
		super(ASSET_STRING.CRATE);

		this.ingredient = ingredient;
	}

	addToScene(scene, x, y) {
		super.addToScene(scene, x, y);

		let ingredient_size = {
			width: this.scene_object.width * 0.7,
			height: this.scene_object.height * 0.7,
		};

		this.ingredient.addToScene(scene, x, y);

		ScaleHelper.scaleObj(
			this.ingredient.getSceneObject(),
			ingredient_size.width,
			ingredient_size.height
		);

		this.ingredient.getSceneObject().width = ingredient_size.width;
		this.ingredient.getSceneObject().height = ingredient_size.height;
	}

	setPosition(x, y) {
		super.setPosition(x, y);

		let ingredient_w = this.ingredient.getSceneObject().width;
		let ingredient_h = this.ingredient.getSceneObject().height;
		let crate_w = this.scene_object.width;
		let crate_h = this.scene_object.height;
		let crate_x = this.scene_object.x;
		let crate_y = this.scene_object.y;

		let ingredient_x = crate_w / 2 - ingredient_w / 2;
		let ingredient_y = crate_h / 2 - ingredient_h / 2;

		this.ingredient.setPosition(crate_x + ingredient_x, crate_y + ingredient_y);
	}

	getIngredient() {
		return IngredientFactory.create(this.ingredient.asset_string);
	}
}
