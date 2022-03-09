import Dish from "./Dish";
import Fish from "../ingredients/Fish";
import ASSET_STRING from "../defines/AssetStrings";

export default class Sashimi extends Dish {
	constructor() {
		super(ASSET_STRING.SASHIMI);

		this.setName("Sashimi");

		let fish = new Fish();
		fish.setNeedToChop(true);

		this.addIngredient(fish);
	}
}
