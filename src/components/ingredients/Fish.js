import ASSET_STRING from "../defines/AssetStrings";
import AbstractIngredient from "./AbstractIngredient";

export default class Fish extends AbstractIngredient {
	constructor() {
		super(ASSET_STRING.RAW_FISH);

		this.setName("Fish");
	}
}
