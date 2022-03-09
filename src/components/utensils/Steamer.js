import ASSET_STRING from "../defines/AssetStrings";
import COOKING_STYLE from "../defines/CookingStyles";
import Cookware from "./Cookware";

export default class Steamer extends Cookware {
	constructor() {
		super(ASSET_STRING.STEAMER);

		this.setCookingStyle(COOKING_STYLE.STEAM);
	}
}
