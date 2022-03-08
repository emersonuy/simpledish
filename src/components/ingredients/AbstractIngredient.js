import COOKING_STYLE from "../defines/CookingStyles";

export default class AbstractIngredient {
	constructor() {
		this.name = "";
		this.need_to_chop = false;
		this.need_to_cook = false;
		this.cooking_style = COOKING_STYLE.BOIL;

		this.chopped_percentage = 0;
		this.cooked_percentage = 0;

		this.chopping_time = 1000;
		this.cooking_time = 1500;

		this.CHOPPING_RATE = 100;
		this.COOKING_RATE = 100;
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

	getNeedToChop() {
		return this.need_to_chop;
	}

	getNeedToCook() {
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
