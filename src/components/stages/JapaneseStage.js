import AbstractStage from "./AbstractStage";
import FishMaki from "../dishes/FishMaki";
import Sashimi from "../dishes/Sashimi";
import BoilingPot from "../utensils/BoilingPot";
import TimeHelper from "../../../helpers/TimeHelpers";

export default class JapaneseStage extends AbstractStage {
	constructor() {
		super();

		this.addDish(new FishMaki(), TimeHelper.minToMsec(2));
		this.addDish(new Sashimi(), TimeHelper.minToMsec(2));

		this.addCookware(new BoilingPot(), 0);
		this.addCookware(new BoilingPot(), 1);
		this.addCookware(new BoilingPot(), 2);
		this.addCookware(new BoilingPot(), 3);

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
	}
}
