import ASSET_STRING from "../defines/AssetStrings";
import COOKING_STYLE from "../defines/CookingStyles";
import Cookware from "./Cookware";

export default class DeepFryer extends Cookware {
	constructor() {
		super(ASSET_STRING.DEEP_FRYER);

		this.setCookingStyle(COOKING_STYLE.DEEP_FRY);
	}
}
