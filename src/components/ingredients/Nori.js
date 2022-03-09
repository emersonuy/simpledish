import ASSET_STRING from "../defines/AssetStrings";
import AbstractIngredient from "./AbstractIngredient";

export default class Nori extends AbstractIngredient {
	constructor() {
		super(ASSET_STRING.NORI);

		this.setName("Nori");
	}
}
