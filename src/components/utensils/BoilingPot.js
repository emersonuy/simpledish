import COOKING_STYLE from "../defines/CookingStyles";
import Cookware from "./Cookware";
import ASSET_STRING from "../defines/AssetStrings";
import CookingStyleBoil from "../cooking_style/CookingStyleBoil";

export default class BoilingPot extends Cookware {
	constructor() {
		super(ASSET_STRING.BOILING_POT);

		this.setCookingStyle(CookingStyleBoil);
	}
}
