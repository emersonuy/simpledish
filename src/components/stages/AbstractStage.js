export default class AbstractStage {
	constructor() {
		this.possible_orders = [];
		this.cookwares = [{}, {}, {}, {}];
		this.cookware_positions = [
			{ x: 0, y: 1650 },
			{ x: 270, y: 1650 },
			{ x: 540, y: 1650 },
			{ x: 810, y: 1650 },
		];

		this.orders = {};

		this.stage_time_limit_ms = 0;
		this.elapsed_time = 0;
		this.CLOCK_UPDATE_RATE = 1000;
		this.ORDER_ID = 1;
	}

	addCookware(cookware, index) {
		if (this.cookwares[index] !== undefined) {
			this.cookwares[index] = cookware;
		}
	}

	addDish(dish, time_limit_ms) {
		this.possible_orders.push({
			id: 0,
			dish: dish,
			time_limit_ms: time_limit_ms,
		});
	}

	setStageTimeLimit(time_limit_ms) {
		this.stage_time_limit_ms = time_limit_ms;
	}

	startStage() {
		let context = this;
		this.stage_timer = setInterval(() => {
			context.elapsed_time += context.CLOCK_UPDATE_RATE;

			for (const [key, value] of Object.entries(context.orders)) {
				value.time_limit_ms -= context.CLOCK_UPDATE_RATE;

				if (value.time_limit_ms <= 0) {
					// TODO: Notify observer. Observer will remove the order.
				}
			}

			if (context.elapsed_time >= context.stage_time_limit_ms) {
				clearInterval(this.stage_timer);
			}
		}, context.CLOCK_UPDATE_RATE);
	}

	addOrder() {
		let random_index = parseInt((Math.random() * 100) % this.possible_orders.length);

		let random_order = { ...this.possible_orders[random_index] };
		random_order.id = this.ORDER_ID++;

		this.orders[random_order.id] = { ...random_order };
	}

	removeOrder(id) {
		delete this.orders[id];
	}

	stopStage() {
		clearInterval(this.stage_timer);
	}

	update() {}
}
