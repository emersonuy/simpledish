import AbstractStage from "./AbstractStage";
import FishMaki from "../dishes/FishMaki";
import Sashimi from "../dishes/Sashimi";
import BoilingPot from "../utensils/BoilingPot";
import TimeHelper from "../../helpers/TimeHelpers";
import Fish from "../ingredients/Fish";
import Rice from "../ingredients/Rice";
import Nori from "../ingredients/Nori";

export default class JapaneseStage extends AbstractStage {
	constructor() {
		super();

		this.addDish(new FishMaki(), TimeHelper.minToMsec(2));
		this.addDish(new Sashimi(), TimeHelper.minToMsec(2));

		this.addCookware(new BoilingPot(), 0);
		this.addCookware(new BoilingPot(), 1);
		this.addCookware(new BoilingPot(), 2);
		this.addCookware(new BoilingPot(), 3);

		this.addCrate(new Fish(), 0);
		this.addCrate(new Rice(), 1);
		this.addCrate(new Nori(), 2);
		this.addCrate(new Fish(), 3);
		this.addCrate(new Rice(), 4);
		this.addCrate(new Nori(), 5);

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
			if (crate === null) return;

			crate.addToScene(scene);
			crate.setPosition(context.crate_positions[index].x, context.crate_positions[index].y);
		});

		this.chopping_boards.forEach((chopping_board, index) => {
			chopping_board.addToScene(scene);
			chopping_board.setPosition(
				context.chopping_board_positions[index].x,
				context.chopping_board_positions[index].y
			);
		});

		this.plates.forEach((plate, index) => {
			plate.addToScene(scene);
			plate.setPosition(context.plate_positions[index].x, context.plate_positions[index].y);
		});
	}
}
