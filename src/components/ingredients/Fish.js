import ASSET_STRING from "../defines/AssetStrings";
import AbstractIngredient from "./AbstractIngredient";

export default class Fish extends AbstractIngredient {
	constructor() {
		super(ASSET_STRING.RAW_FISH);

		this.setNeedToChop(true);
		this.setChoppedAssetString(ASSET_STRING.CHOPPED_RAW_FISH);
		this.setCookedAssetString(ASSET_STRING.FRIED_FISH);

		this.setName("Fish");
	}
}
