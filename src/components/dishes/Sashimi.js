import Dish from "./Dish";
import Fish from "../ingredients/Fish";
import ASSET_STRING from "../defines/AssetStrings";
import DISH from "../defines/DishNames";

export default class Sashimi extends Dish {
	constructor() {
		super(ASSET_STRING.SASHIMI);

		this.setName(DISH.SASHIMI);

		let fish = new Fish();
		fish.setNeedToChop(true);

		this.addIngredient(fish);
	}
}
