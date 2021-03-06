import ASSET_STRING from "../defines/AssetStrings";
import COOKING_STYLE from "../defines/CookingStyles";
import Cookware from "./Cookware";

export default class Skillet extends Cookware {
	constructor() {
		super(ASSET_STRING.SKILLET);

		this.setCookingStyle(COOKING_STYLE.STIR_FRY);
	}
}
