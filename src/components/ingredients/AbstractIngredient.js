import COOKING_STYLE from "../defines/CookingStyles";
import SceneObject from "../SceneObject";

export default class AbstractIngredient extends SceneObject {
	constructor(asset_string) {
		super(asset_string);

		this.cooked_asset_string = "";
		this.chopped_asset_string = "";

		this.name = "";
		this.need_to_chop = false;
		this.need_to_cook = false;
		this.cooking_style = COOKING_STYLE.BOIL;

		this.chopped_percentage = 0;
		this.cooked_percentage = 0;

		this.chopping_time = 2000;
		this.cooking_time = 5000;

		this.CHOPPING_RATE = 100;
		this.COOKING_RATE = 100;
	}

	setCookedAssetString(asset_string) {
		this.cooked_asset_string = asset_string;
	}

	setChoppedAssetString(asset_string) {
		this.chopped_asset_string = asset_string;
	}

	setChoppingTime(time_ms) {
		this.chopping_time = time_ms;
	}

	setCookingTime(time_ms) {
		this.cooking_time(time_ms);
	}

	startChopping() {
		if (this.chopped_percentage >= 1) {
			return;
		}

		let context = this;
		this.chopping_timer = setInterval(function () {
			let progress = context.CHOPPING_RATE / context.chopping_time;

			context.chopped_percentage += progress;

			if (context.chopped_percentage >= 1) {
				context.chopped_percentage = 1;
				clearInterval(context.chopping_timer);
			}
		}, context.CHOPPING_RATE);
	}

	startCooking() {
		if (this.cooked_percentage >= 1) {
			return;
		}

		let context = this;
		this.cooking_timer = setInterval(function () {
			let progress = context.COOKING_RATE / context.cooking_time;

			context.cooked_percentage += progress;

			if (context.cooked_percentage >= 1) {
				context.cooked_percentage = 1;
				clearInterval(context.cooking_timer);
			}
		}, context.COOKING_RATE);
	}

	setName(name) {
		this.name = name;
	}

	setNeedToChop(b) {
		this.need_to_chop = b;
	}

	setNeedToCook(b) {
		this.need_to_cook = b;
	}

	setCookingStyle(cooking_style) {
		this.cooking_style = cooking_style;
	}

	getName() {
		return this.name;
	}

	needsToBeChopped() {
		return this.need_to_chop;
	}

	needsToBeCooked() {
		return this.need_to_cook;
	}

	getCookingStyle() {
		return this.cooking_style;
	}

	isChopped() {
		return this.need_to_chop ? this.chopped_percentage === 1 : true;
	}

	isCooked() {
		return this.need_to_cook ? this.cooked_percentage === 1 : true;
	}
}
