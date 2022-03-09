import ASSET_STRING from "../defines/AssetStrings";
import AbstractIngredient from "./AbstractIngredient";

export default class Rice extends AbstractIngredient {
	constructor() {
		super(ASSET_STRING.RAW_RICE);

		this.setCookedAssetString(ASSET_STRING.STEAMED_RICE);

		this.setName("Rice");
	}
}
