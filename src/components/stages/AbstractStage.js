import Crate from "../Crate";
import ChoppingBoard from "../utensils/ChoppingBoard";
import Plate from "../Plate";
import Order from "../Order";
import ASSET_STRING from "../defines/AssetStrings";
import DishFactory from "../dishes/DishFactory";

export default class AbstractStage {
	constructor() {
		this.possible_dishes = [];

		this.cookwares = [{}, {}, {}, {}];
		this.cookware_positions = [
			{ x: 0, y: 1650 },
			{ x: 270, y: 1650 },
			{ x: 540, y: 1650 },
			{ x: 810, y: 1650 },
		];

		this.crates = [null, null, null, null, null, null];

		this.crate_positions = [
			{ x: 0, y: 520 },
			{ x: 0, y: 790 },
			{ x: 0, y: 1060 },
			{ x: 810, y: 520 },
			{ x: 810, y: 790 },
			{ x: 810, y: 1060 },
		];

		this.chopping_boards = [new ChoppingBoard(), new ChoppingBoard(), new ChoppingBoard()];

		this.chopping_board_positions = [
			{ x: 405, y: 520 },
			{ x: 405, y: 790 },
			{ x: 405, y: 1060 },
		];

		this.plates = [new Plate(), new Plate(), new Plate()];
		this.plate_positions = [
			{ x: 0, y: 1350 },
			{ x: 405, y: 1350 },
			{ x: 810, y: 1350 },
		];

		this.orders = [
			new Order(ASSET_STRING.BG_270X270),
			new Order(ASSET_STRING.BG_270X270),
			new Order(ASSET_STRING.BG_270X270),
			new Order(ASSET_STRING.BG_270X270),
		];
		this.order_positions = [
			{ x: 0, y: 0 },
			{ x: 270, y: 0 },
			{ x: 540, y: 0 },
			{ x: 810, y: 0 },
		];

		this.stage_time_limit_ms = 0;
		this.elapsed_time = 0;
		this.CLOCK_UPDATE_RATE = 1000;
		this.ORDER_ID = 1;
	}

	onCrateClick(callback) {
		this.crates.forEach((crate) => {
			crate.on("pointerup", callback);
		});
	}

	onChoppingBoardClick(callback) {
		this.chopping_boards.forEach((chopping_board) => {
			chopping_board.on("pointerup", callback);
		});
	}

	onPlateClick(callback) {
		this.plates.forEach((plate) => {
			plate.on("pointerup", callback);
		});
	}

	onCookwareClick(callback) {
		this.cookwares.forEach((cookware) => {
			cookware.on("pointerup", callback);
		});
	}

	addCookware(cookware, index) {
		if (this.cookwares[index] !== undefined) {
			this.cookwares[index] = cookware;
		}
	}

	addDish(dish, time_limit_ms) {
		this.possible_dishes.push({
			id: 0,
			dish: dish,
			time_limit_ms: time_limit_ms,
		});
	}

	addCrate(ingredient, index) {
		if (this.crates[index] !== undefined) {
			this.crates[index] = new Crate(ingredient);
		}
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
		let random_index = parseInt((Math.random() * 100) % this.possible_dishes.length);

		let random_dish_info = { ...this.possible_dishes[random_index] };
		let random_dish_name = random_dish_info.dish.getName();

		random_dish_info.dish = DishFactory.create(random_dish_name);

		for (let i = 0; i < this.orders.length; i++) {
			let order = this.orders[i];

			if (order.empty()) {
				random_dish_info.id = this.ORDER_ID++;
				order.setDish(random_dish_info);
				break;
			}
		}
	}

	removeOrder(id) {
		delete this.orders[id];
	}

	stopStage() {
		clearInterval(this.stage_timer);
	}

	update(scene) {
		this.orders.forEach((order) => {
			order.update(scene);
		});
	}
}
