import COOKING_STYLE from "../defines/CookingStyles";
import WorldObject from "../WorldObject";

const INGREDIENT_FRAME = {
	RAW: 0,
	CHOPPED: 1,
	COOKING: 2,
	COOKED: 3,
};

const COOKING_STYLE_ASSET_STRINGS = [""];

export default class AbstractIngredient extends WorldObject {
	constructor(asset_string) {
		super(asset_string);

		this.cooked_asset_string = "";
		this.chopped_asset_string = "";

		this.name = "";
		this.need_to_chop = false;
		this.need_to_cook = false;
		this.cooking_style = null;

		this.chopped_percentage = 0;
		this.cooked_percentage = 0;

		this.chopping_time = 2000;
		this.cooking_time = 5000;

		this.CHOPPING_RATE = 100;
		this.COOKING_RATE = 100;

		this.frame_index = INGREDIENT_FRAME.RAW;

		this.events = {};
	}

	on(event, callback) {
		this.events[event] = callback;
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

	isBeingProcessed() {
		if (this.chopped_percentage > 0 || this.cooked_percentage > 0) return true;

		return false;
	}

	startChopping() {
		if (this.chopped_percentage >= 1) {
			return;
		}

		let context = this;
		this.chopping_timer = setInterval(function () {
			let progress = context.CHOPPING_RATE / context.chopping_time;

			context.chopped_percentage += progress;

			if (context.events["chop_progress"] !== undefined) {
				context.events["chop_progress"](context.chopped_percentage * 100);
			}

			if (context.chopped_percentage >= 1) {
				context.chopped_percentage = 1;
				context.frame_index = INGREDIENT_FRAME.CHOPPED;
				context.getGameObject().setFrame(context.frame_index);
				context.stopChopping();

				if (context.events["chop_complete"] !== undefined) {
					context.events["chop_complete"]();
				}
			}
		}, context.CHOPPING_RATE);
	}

	stopChopping() {
		clearInterval(this.chopping_timer);
	}

	startCooking() {
		if (this.cooked_percentage >= 1) {
			return;
		}

		this.frame_index = INGREDIENT_FRAME.COOKING;
		this.getGameObject().setFrame(this.frame_index);

		let context = this;
		this.cooking_timer = setInterval(function () {
			let progress = context.COOKING_RATE / context.cooking_time;

			context.cooked_percentage += progress;
			if (context.events["cook_progress"] !== undefined) {
				context.events["cook_progress"](context.cooked_percentage * 100);
			}

			if (context.cooked_percentage >= 1) {
				context.cooked_percentage = 1;
				context.stopCooking();

				context.frame_index = INGREDIENT_FRAME.COOKED;
				context.getGameObject().setFrame(context.frame_index);

				if (context.events["cook_complete"] !== undefined) {
					context.events["cook_complete"]();
				}
			}
		}, context.COOKING_RATE);
	}

	stopCooking() {
		clearInterval(this.cooking_timer);
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
		this.setNeedToCook(true);

		this.cooking_style = cooking_style;
	}

	getCookingStyle() {
		console.log(this.cooking_style);
		return this.cooking_style;
	}

	getName() {
		return this.name;
	}

	needsToBeChopped() {
		return this.need_to_chop;
	}

	needsToBeChoppedAndAlreadyChopped() {
		return this.need_to_chop && this.chopped_percentage === 1;
	}

	needsToBeChoppedButNotChoppedYet() {
		return this.need_to_chop && this.chopped_percentage < 1;
	}

	needsToBeCooked() {
		return this.need_to_cook;
	}

	needsToBeCookedAndAlreadyCooked() {
		return this.need_to_cook && this.cooked_percentage === 1;
	}

	needsToBeCookedButNotCookedYet() {
		return this.need_to_cook && this.cooked_percentage < 1;
	}

	chopped() {
		return this.need_to_chop ? this.chopped_percentage === 1 : false;
	}

	cooked() {
		return this.need_to_cook ? this.cooked_percentage === 1 : false;
	}
}
