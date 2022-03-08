import COOKING_STYLE from "../defines/CookingStyles";
import Cookware from "./Cookware";

export default class Skillet extends Cookware {
	constructor() {
		super();

		this.setCookingStyle(COOKING_STYLE.STIR_FRY);
	}
}
