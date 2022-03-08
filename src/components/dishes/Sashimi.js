import Dish from "./Dish";
import Fish from "../ingredients/Fish";

export default class Sashimi extends Dish {
	constructor() {
		super();

		let fish = new Fish();
		fish.setNeedToChop(true);

		this.addRequiredIngredients(fish);
	}
}
