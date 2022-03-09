import Dish from "./Dish";
import Fish from "../ingredients/Fish";
import Nori from "../ingredients/Nori";
import Rice from "../ingredients/Rice";
import COOKING_STYLE from "../defines/CookingStyles";
import ASSET_STRING from "../defines/AssetStrings";

export default class FishMaki extends Dish {
	constructor() {
		super(ASSET_STRING.FISH_MAKI);

		this.setName("Fish Maki");

		let fish = new Fish();
		let nori = new Nori();
		let rice = new Rice();

		fish.setNeedToChop(true);
		rice.setNeedToCook(true);
		rice.setCookingStyle(COOKING_STYLE.BOIL);

		this.addIngredient(fish);
		this.addIngredient(nori);
		this.addIngredient(rice);
	}
}
