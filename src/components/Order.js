import ScaleHelper from "../helpers/ScaleHelper";
import WorldObject from "./WorldObject";
export default class Order extends WorldObject {
	constructor(asset_string) {
		super(asset_string);

		this.dish_info = null;
	}

	setDish(dish_info) {
		this.dish_info = dish_info;

		let dish = this.dish_info.dish;
	}

	serve(dish) {
		// TODO: Compare dish if the same with this.dish_info.
		return true;
	}

	empty() {
		return this.dish_info === null;
	}

	addToScene(scene, x, y) {
		super.addToScene(scene, x, y);

		if (this.dish_info !== null) {
			this.dish_info.dish.addToScene(scene, x, y);
		}
	}

	update(scene) {
		if (this.dish_info !== null && this.dish_info.dish !== null) {
			let position = this.getPosition();
			let size = this.getSize();

			let dish = this.dish_info.dish;

			let w = size.w / 2;
			let h = size.h / 2;

			let x = size.w / 2 - w / 2;

			dish.addToScene(scene, position.x + x, position.y);

			ScaleHelper.scaleGameObject(dish.getGameObject(), w, h);
		}
	}
}
