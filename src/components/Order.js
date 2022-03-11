import { Scale } from "phaser";
import ScaleHelper from "../helpers/ScaleHelper";
import ProgressBar from "./ui/ProgressBar";
import WorldObject from "./WorldObject";
export default class Order extends WorldObject {
	constructor(asset_string) {
		super(asset_string);

		this.dish_info = null;

		this.ingredient_positions = [
			{ x: 0, y: 180 },
			{ x: 90, y: 180 },
			{ x: 180, y: 180 },
		];

		this.cooking_style_positions = [
			{ x: 0, y: 270 },
			{ x: 90, y: 270 },
			{ x: 180, y: 270 },
		];

		this.progress_bar = null;
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

		let size = this.getSize();
		this.progress_bar = new ProgressBar(scene, x, y, size.w, size.h);
		this.progress_bar.setProgress(99);

		if (this.dish_info !== null) {
			this.dish_info.dish.addToScene(scene, x, y);
		}
	}

	renderDish(scene, dish) {
		let position = this.getPosition();
		let size = this.getSize();

		let w = 180;
		let h = 180;

		let x = size.w / 2 - w / 2;

		dish.addToScene(scene, position.x + x, position.y);

		ScaleHelper.scaleGameObject(dish.getGameObject(), w, h);
	}

	renderIngredients(scene, ingredients) {
		let x = this.getPosition().x;
		ingredients.forEach((ingredient, index) => {
			ingredient.addToScene(scene);
			ScaleHelper.scaleGameObject(ingredient.getGameObject(), 90, 90);
			ingredient.setPosition(
				x + this.ingredient_positions[index].x,
				this.ingredient_positions[index].y
			);
		});
	}

	renderCookingStyles(scene, ingredients) {
		let x = this.getPosition().x;
		ingredients.forEach((ingredient, index) => {
			if (ingredient.needsToBeCooked()) {
				let cooking_style = ingredient.getCookingStyle();

				console.log(ingredient);

				cooking_style.addToScene(scene);
				ScaleHelper.scaleGameObject(cooking_style.getGameObject(), 90, 90);
				cooking_style.setPosition(
					x + this.cooking_style_positions[index].x,
					this.cooking_style_positions[index].y
				);
			}
		});
	}

	update(scene) {
		if (this.dish_info !== null && this.dish_info.dish !== null) {
			let dish = this.dish_info.dish;
			this.renderDish(scene, dish);

			let ingredients = dish.getIngredients();
			this.renderIngredients(scene, ingredients);

			this.renderCookingStyles(scene, ingredients);
		}
	}
}
