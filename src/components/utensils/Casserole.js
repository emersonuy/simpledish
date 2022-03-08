import COOKING_STYLE from "../defines/CookingStyles";
import Cookware from "./Cookware";

export default class Casserole extends Cookware {
	constructor() {
		super();

		this.setCookingStyle(COOKING_STYLE.BOIL);
	}
}
