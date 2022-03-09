import AbstractStage from "./AbstractStage";
import FishMaki from "../dishes/FishMaki";
import Sashimi from "../dishes/Sashimi";
import BoilingPot from "../utensils/BoilingPot";
import TimeHelper from "../../../helpers/TimeHelpers";
import Crate from "../Crate";
import ChoppingBoard from "../utensils/ChoppingBoard";
import Plate from "../Plate";

export default class JapaneseStage extends AbstractStage {
	constructor() {
		super();

		this.addDish(new FishMaki(), TimeHelper.minToMsec(2));
		this.addDish(new Sashimi(), TimeHelper.minToMsec(2));

		this.addCookware(new BoilingPot(), 0);
		this.addCookware(new BoilingPot(), 1);
		this.addCookware(new BoilingPot(), 2);
		this.addCookware(new BoilingPot(), 3);

		this.crates = [
			new Crate(),
			new Crate(),
			new Crate(),
			new Crate(),
			new Crate(),
			new Crate(),
		];

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

		this.setStageTimeLimit(TimeHelper.minToMsec(5));
	}

	addToScene(scene) {
		let context = this;

		this.cookwares.forEach((cookware, index) => {
			if (cookware.addToScene === undefined) return;

			cookware.addToScene(
				scene,
				context.cookware_positions[index].x,
				context.cookware_positions[index].y
			);
		});

		this.crates.forEach((crate, index) => {
			crate.addToScene(scene);
			crate
				.getSceneObject()
				.setPosition(context.crate_positions[index].x, context.crate_positions[index].y);
		});

		this.chopping_boards.forEach((chopping_board, index) => {
			chopping_board.addToScene(scene);
			chopping_board
				.getSceneObject()
				.setPosition(
					context.chopping_board_positions[index].x,
					context.chopping_board_positions[index].y
				);
		});

		this.plates.forEach((plate, index) => {
			plate.addToScene(scene);
			plate
				.getSceneObject()
				.setPosition(context.plate_positions[index].x, context.plate_positions[index].y);
		});
	}
}
